const express = require("express");

// port define
const port = process.env.PORT || 8080;

// calling express
const app = express();

// EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// router path
app.use("/", require("./router"));

//listing to the post and checking errors if any
app.listen(port, function (err) {
  if (err) {
    console.log(`Server Error :: ${err}`);
    return;
  }
  console.log(`Server is running on port no :: ${port}`);
});
