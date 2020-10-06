const data = require("../db/db.json");
const fs = require("fs");
const dbPath = "./db/db.json";

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        res.json(data);
    });
    app.post("/api/notes", (req, res) => {
        console.log(req.body);
        const dbFile = JSON.parse(fs.readFileSync(dbPath));
        dbFile.push(req.body);
        console.log(dbFile);
        fs.writeFileSync(dbPath, JSON.stringify(dbFile, null, 2));
        // res.json(true);
    });
    app.delete("/api/notes/:id", (req, res) => {

    })
}