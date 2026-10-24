const express = require("express");
const rooute = express.Router();

const contr = require("../controller/comments.controller");



rooute.get( "/v1/comments/" ,contr.getAllComments)
rooute.post( "/v1/comments"  ,contr.createelement)
rooute.put( "/v1/comments/:id"  ,contr.updatecomment)
rooute.delete( "/v1/comments/:id"  ,contr.deletecomment)
rooute.get( "/v1/comments/:id"  ,contr.getbyid)




module.exports = rooute;