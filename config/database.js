const path = require("path");

module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env(
          "DATABASE_HOST",
          "content-database.coch3fcuahkn.ap-south-1.rds.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "content-database"),
        user: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "#Teambringit123"),
      },
      useNullAsDefault: true,
    },
  };
};
