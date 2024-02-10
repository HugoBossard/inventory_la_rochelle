# Emprunt et inventaire des matériaux informatiques de l'université de La Rochelle (Inventory_UnivLR)

La stack PRuNES est la stack utilisé pour mettre en place l'outil d'emprunt et d'inventaire pour l'UnivLR. Ce projet est dans le cadre de notre projet fédérateur de novembre/décembre 2022.

Elle est construite à partir des éléments suivants :

- [PostgreSQL](https://www.postgresql.org/)
- [ReactJS](https://fr.reactjs.org/)
- [NodeJS](https://nodejs.org/fr/)
- [Express](https://expressjs.com/fr/)
- [Sequelize](https://sequelize.org/)

## Installer les dépendances

```
npm install
```

## Démarrer le serveur PostgreSQL (nécessaire d'avoir Docker d'installer)

```
docker-compose up -d
```

## Fonctionnement de l'application

### Démarrage du côté back du projet

```
npm run server
```

### Démarrage du côté front du projet

```
npm run client
```

### Démarrage du projet en mode développement (front/back)

```
npm run dev
```

## Création des tables pour la base de données

```
cd api
```

```
npx sequelize-cli db:migrate
```

## Insertion des données d'exemple en base de données

```
cd api
```

```
npx sequelize-cli db:seed:all
```

### Generer la documentation swagger

```
npm run doc-autogen
```

## Contributeur

Ce repository est maintenu par :

- [BRAY Steven](https://forge.iut-larochelle.fr/sbray)
- [TAVERNET Axel](https://forge.iut-larochelle.fr/ataverne)
- [TROUVE Julien](https://forge.iut-larochelle.fr/jtrouve)
- [BOSSARD Hugo](https://forge.iut-larochelle.fr/hbossard)