const { sequelize } = require("../models");

module.exports = {
	async getMaterielsEmprunter (req, res) {
		try {
			const query = await req.db.Materiels.findAll({
				attributes: ["id", "nomProduit"],
				include: [
					{
						model: req.db.Emprunts,
						attributes: ["id", "nomEmprunteur", "groupe", "dateRetourPrevu"],
						order:[
							['createdAt','DESC']
						],
						limit:1
					}
				],
				where: {
					etat: "emprunter"
				}
			});

			function sortByDateEmprunt(key1, key2) {
				if (key1.Emprunts[0].dateRetourPrevu > key2.Emprunts[0].dateRetourPrevu) {
				  return 1;
				}
				else if (key1.Emprunts[0].dateRetourPrevu === key2.Emprunts[0].dateRetourPrevu) {
				  return 0;
				}
				else {
				  return -1;
				}
			}
			  
			function orderBy(datas) {
				return datas.sort(sortByDateEmprunt);
			}

			let datas = orderBy(query);

			res.status(200).send(datas);
		}
		catch (err) {
			res.status(500).send(err);
		}
	},

	async getMaterielsDisponible (req, res) {
		try{
			const query = await req.db.Materiels.findAll({
				attributes: ["id", "nomProduit"],
				order: [
					["nomProduit", "ASC"],
				],
				where: {
					etat: "disponible"
				}
			});
			res.status(200).send(query);
		}
		catch (err) {
			res.status(500).send(err.stack);
		}
	},

	async getMaterielsAttente (req, res) {
		try{
			const query = await req.db.Materiels.findAll({
				attributes: ["id", "nomProduit"],
				order: [
					["nomProduit", "DESC"]
				],
				where: {
					etat: "attente"
				}
			});

			res.status(200).send(query);
		}
		catch (err) {
			res.status(500).send(err.stack);
		}
	},

	async getCommentaire (req, res) {
		try{
			const query = await req.db.CommentairesAttente.findAll({
				attributes: ["id", "libelle"],
				order: [
					["dateCommentaire", "DESC"]
				],
				where: {
					idMateriel: req.params.idMateriel
				},
				limit: 1
			});

			res.status(200).send(query);
		}
		catch (err) {
			res.status(500).send(err.stack);
		}
	},

	async getMateriel(req, res) {
		try {
			const query = await req.db.Materiels.findOne({
				attributes: ["id", "nomProduit"],
				include: [
					{
						model: req.db.Emprunts,
						attributes: ["id", "nomEmprunteur", "groupe", "dateEmprunt", "dateRetourPrevu", "commentaire"],
						order:[
							['createdAt','DESC']
						],
						limit:1
					}
				],
				where: {
					id: req.params.id
				}
			});
			res.status(200).send(query);
		}
		catch (err) {
			res.status(500).send(err.stack);
		}
	}
};