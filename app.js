const express = require("express");
const app = express();

const { getUser, getUsers } = require("./teste1");
const { createUser } = require("./teste2");
const { deleteUser } = require("./teste3");
const { updateUser } = require("./teste4");
const teste5 = require("./teste5");

app.set("view engine", "jade");

app.use(express.json());

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/users/:id", getUser);
app.get("/users", getUsers);
app.post("/users", createUser);
app.delete("/users/:id", deleteUser);
app.put("/users/:id", updateUser);
app.get("/users/access", teste5);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
