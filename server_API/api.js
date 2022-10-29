var dboperations = require("./dboperations");

var express = require("express");
var cors = require("cors");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
// const { response } = require("express");
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  next();
});

router.get("/allTasks", (request, response) => {
  dboperations.getTasks().then((result) => {
    response.json(result.recordset);
  });
});

app.listen(PORT);
