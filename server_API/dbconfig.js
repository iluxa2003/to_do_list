const config = {
  user: "ilya",
  password: "1234",
  server: "localhost",
  database: "to_do_list_api",
  options: {
    trustedconnection: true,
    enableArithAort: true,
    instancename: "SQLEXPRESS",
    trustServerCertificate: true,
  },
  port: 1433,
};

module.exports = config;
