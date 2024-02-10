if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports={
  "development": {
    "username": "user",
    "password": "pass",
    "database": "my_db",
    "host": "localhost",
    "port": "5432",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRESQL_ADDON_USER,
    "password": process.env.POSTGRESQL_ADDON_PASSWORD,
    "database": process.env.POSTGRESQL_ADDON_DB,
    "host": process.env.POSTGRESQL_ADDON_HOST,
    "port": "5432",
    "dialect": "postgres"
  }
};