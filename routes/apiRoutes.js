const data = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        res.json(data);
    });
    app.post("/api/notes", (req, res) => {
        const id = data.length;
        console.log(req.body);
        // fs.appendFileSync(data, req.body);
        // res.json(true);
    });
    app.delete("/api/notes/:id", (req, res) => {

    })
}