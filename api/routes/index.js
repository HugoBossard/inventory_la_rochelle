let express = require("express");
let router = express.Router();

const materielsController = require("../controllers/materiels.controller");
const empruntsController = require("../controllers/emprunts.controller");



router.get(
	/*
	#swagger.tags = ['Materiels']
	#swagger.description = 'Récupérer la liste des matériels emprunter'
	*/

	/*
	#swagger.responses[200] = {
		schema: { "$ref": "#/definitions/materielsEmprunter" },
		description: "Liste des matériels emprunter" }
	}
	*/

	"/materiels/emprunter",
	materielsController.getMaterielsEmprunter
);

router.get(
	/*
	#swagger.tags = ['Materiels']
	#swagger.description = 'Récupérer la liste des matériels disponible'
	*/

	/*
	#swagger.responses[200] = {
		schema: { "$ref": "#/definitions/materielsDisponible" },
		description: "Liste des matériels disponible" }
	}
	*/

	"/materiels/disponible",
	materielsController.getMaterielsDisponible
);

router.get(
	"/materiels/attente",
	materielsController.getMaterielsAttente
);

router.get (
	"/materiels/commentaire/:idMateriel",
	materielsController.getCommentaire
)

router.post(
	"/materiels/emprunt",
	empruntsController.postNewEmprunt
);

router.post(
	"/materiels/retour",
	empruntsController.postRetour
);

router.post(
	"/materiels/disponible/:idMateriel",
	empruntsController.postDisponible
)

router.get(
	"/materiels/:id",
	materielsController.getMateriel
);

module.exports = router;