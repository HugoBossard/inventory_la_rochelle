const swaggerAutogen = require("swagger-autogen")();


const doc = {
	info: {
		version: "1.0.0",
		title: "My API",
		description: "Documentation automatique de l'api pour le projet <b>Inventory-univlr</b>."
	},
	host: "localhost:4000",
	basePath: "",
	schemes: [""],
	consumes: ["application/json"],
	produces: ["application/json"],
	tags: [
		{
			"name": "Materiels"
		}
	],
	definitions: {
		materielsEmprunter: {
			id: 1,
			nomProduit: "MBP1"
		},
		materielsDisponible: {
			id: 2,
			nomProduit: "MBP2"
		}
	}
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["../../index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
	require("../../index.js"); // Your project's root file
});