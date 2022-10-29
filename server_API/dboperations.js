var config = require("./dbconfig");
const sql = require("mssql");

async function getTasks() {
  try {
    let pool = await sql.connect(config);
    let tasks = await pool.request().query("SELECT * FROM TASKS");
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTasks: getTasks,
};
