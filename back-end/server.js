// const express = require('express');
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const TrocCrud = require("./RoutesOperations/TrocCRUD");
const UserCrud = require("./RoutesOperations/UserCRUD");

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
console.log("bodyparser");

mongoose
  .connect("mongodb://localhost:27017/Troquini")
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
app.get("/trocs", TrocCrud.getTrocs);
app.post("/troc", TrocCrud.addTroc);
app.get("/troc", TrocCrud.geter);

app.get("/", (req, res) => res.send("Hello World"));
app.get("/users", UserCrud.getUsers);
app.post("/connect-user", UserCrud.getConnectedUser);
app.post("/user", UserCrud.addUser);

// Use Routes
app.get("/test", TrocCrud.test);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
