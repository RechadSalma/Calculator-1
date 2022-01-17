const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

/*reads our statc files such as css / js / etc… */
app.use("/", express.static(path.resolve(__dirname, "../dist")));

/*Get node server to read from our bundle index.html file */
app.get("/", function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
    res.send(contentFromHtmlFile);
});

/*create a http://localhost:3000 port*/
app.listen(3000, function () {
    console.log("iK Application is running on http://localhost:3000/");
});
