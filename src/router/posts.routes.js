const express = require("express");
const routepost = express.Router();
const controllerpost = require("../controller/posts.controller");




routepost.get("/v1/comment/tag", controllerpost.post_bytag);


routepost.get("/v1/comment/:id", controllerpost.get);


routepost.get("/v1/comment/:id/", controllerpost.getcomments_byid);


routepost.post("/v1/comment/", controllerpost.createelement);


routepost.patch("/v1/comment/:id", controllerpost.update);


routepost.delete("/v1/comment/:id", controllerpost.deletee);


routepost.post("/v1/comment/:id/like", controllerpost.postlikee);

module.exports = routepost;