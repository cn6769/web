module.exports = {
    HOST: "localhost",
    USER: "svcPrevent",
    PASSWORD: "admin",
    DB: "Prevent",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };