const data = require("../db/db.json");
const fs = require("fs");
const dbPath = "./db/db.json";

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        res.json(data);
    });
    app.post("/api/notes", (req, res) => {
        const dbFile = JSON.parse(fs.readFileSync(dbPath));
        dbFile.push(req.body);
        fs.writeFileSync(dbPath, JSON.stringify(dbFile, null, 2));
    });
    app.delete("/api/notes/:id", (req, res) => {

    })
}