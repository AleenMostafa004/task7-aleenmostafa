const express = require("express");
const morgan = require("morgan");
const app = express();
require('dotenv').config();
const userRoutes = require("./router/user.routes");
const postRoutes = require("./router/posts.routes");
const commentRoutes = require("./router/comments.routes");
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", commentRoutes);
const PORT = process.env.PORT || 3000;
app.listen("PORT", () => {
  console.log("the server is running ssss");
});