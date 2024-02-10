const { sequelize } = require("../models");

module.exports = {
    async postNewEmprunt (req, res) {
		// console.log("fiojzjfeifzejiejie ----");
		// const columns = await sequelize.query("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name='Emprunts'");
		// console.log(columns);
		// console.log("fiojzjfeifzejiejie ----");

		const empruntCreated = await req.db.Emprunts.create({
			nomEmprunteur: req.body.nomEmprunteur,
			groupe: req.body.groupe,
			commentaire: req.body.commentaire,
			dateEmprunt: req.body.dateEmprunt,
			dateRetourPrevu: req.body.dateRetourPrevu,
			idMateriel: req.body.idMateriel
		});

		const materielEmprunter = await req.db.Materiels.update({
			etat: "emprunter"}, {
			where: {
				id: req.body.idMateriel
			}
		}
		);

		if (empruntCreated) {
			res.status(201).send();
		}
		else {
			res.status(409).send("Impossible. Cet emprunt existe déjà");
		}
	},

	async postRetour (req, res) {
		try {
			const updateEtat = await req.db.Materiels.update({
				etat: "attente"}, {
				where: {
					id: req.body.idMateriel
				}
			});

			const updateDateRetour = await req.db.Emprunts.update({
				dateRetour: req.body.dateRetour}, {
					where: {
						id: req.body.idEmprunt
				}
			});

			const commentaireRetour = await req.db.CommentairesAttente.create({
				libelle: req.body.commentairesAttente,
				dateCommentaire: req.body.dateCommentaire,
				idMateriel: req.body.idMateriel
			})
			
			res.status(200).send();

		}
		catch (err) {
			res.status(500).send(err)
		}
	},

	async postDisponible (req, res) {
		try {
			const query = await req.db.Materiels.update({
				etat: "disponible"}, {
				where: {
					id: req.params.idMateriel
				}
			})

			res.status(200).send(query);
		}
		catch (err) {
			console.lo
			res.status(500).send(err)
		}
	}
};