const path = require("path");
const express = require("express");

const app = express();

const publicPath = path.join(__dirname, "..", "build");


app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.send(path.join(publicPath, "index.html"));
}); 




let port = process.env.PORT || 3000;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => 
console.log("Server is running on port " + port))

