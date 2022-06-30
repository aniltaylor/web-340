const express = require("express");

const app = express();
const port = 3000;

//Static Files Images, JS, CSS Styles
app.use(express.static("public"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/styles", express.static(__dirname + "public/img"));

//HTML Routes
app.engine(".html", require("ejs").__express);
app.set("views", "./views");
app.set("view engine", "html");

app.get("", (req, res) => {
  res.render("index");
});

//Listening on port 3000

app.listen(port, () => {
  console.log("Application started and listening on port" + port);
});
