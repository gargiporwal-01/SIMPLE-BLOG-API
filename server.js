const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const postRoutes = require("./routes/postRoutes");

connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //It parses JSON data from the request body and converts it into a JavaScript object.

app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
