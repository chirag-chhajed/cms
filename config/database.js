module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "wanderrides"),
        user: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "94justchat"),
      },
      useNullAsDefault: true,
    },
  };
};
