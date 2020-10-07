const data = require("../db/db.json");
const fs = require("fs");
const dbPath = "./db/db.json";
function dbContent() {
    return JSON.parse(fs.readFileSync(dbPath))
}

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        // console.log(data)
        // console.log(JSON.parse(dbContent));
        res.json(dbContent());
    });
    app.post("/api/notes", (req, res) => {
        // console.log(data);
        const notes = dbContent();
        // console.log(notes);
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: data.length.toString()
        };
        notes.push(newNote);
        fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
        res.json(newNote);
    });
    app.delete("/api/notes/:id", (req, res) => {
        // console.log('hello');
        // res.json(req.body);
        let notes = dbContent();
        notes = notes.filter((note) => {
            return note.id != req.params.id;
        })
        reassign(notes);
        fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
        res.json(notes);
    })
    
    function reassign(notes) {
        notes = notes.forEach((note, index) => {
            note["id"] = index.toString();
        });
    }
}