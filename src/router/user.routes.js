const express = require("express");
const route = express.Router();

const cont = require("../controller/users.controller");

route.get("/v1/users", cont.getallelements);
route.get("/v1/users/:id", cont.getbyid);
route.post("/v1/users", cont.createelement);
route.delete("/v1/users/:id", cont.delete);
route.put("/v1/users/:id", cont.update);
route.get("/v1/users/:id/posts", cont.getpost_id);
module.exports = route;