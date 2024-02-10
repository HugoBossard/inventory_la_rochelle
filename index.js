const express = require("express");
const jwt = require('jsonwebtoken');

const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./api/doc/swagger-output.json");

const cors = require("cors");
const router = require("./api/routes");

const app = express();

const tokenKey = process.env.TOKEN_KEY || 'secret';

function OtoroshiMiddleware(opts = {}) {
	return (req, res, next) => {
		jwt.verify(req.get("Otoroshi-State") || 'none', tokenKey, { issuer: 'Otoroshi' }, (err, decodedState) => {
			console.log(decodedState)
			const ttl = 10 // by default its 30 seconds in the UI
			const now = Math.floor(Date.now() / 1000)
			const token = { 'state-resp': decodedState.state, iat: now, nbf: now, exp: now + ttl, aud: 'Otoroshi' }
			res.set("Otoroshi-State-Resp", jwt.sign(token, tokenKey, { algorithm: 'HS512' }))
			next();
		})
	}
}

let corsOptions= {
	origin:["http://localhost:3000"],
	optionsSuccessStatus : 200
};

app.use(cors(corsOptions));
if (process.env.NODE_ENV === 'production') {
	app.use(OtoroshiMiddleware());
};

const apiConfig = require("./config");
app.keys = [apiConfig.development.secret];

const PORT = process.env.PORT || 4000;

const db = require("./api/models");
db.sequelize
	.sync()
	.then(() => console.log("models synced!"))
	.catch(err => console.log(err));

app.use(function(req, res, next) {
	req.db = db;
	next();
});

app.use(express.json());

app.use("/api", router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

const server = app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);

module.exports = server;
