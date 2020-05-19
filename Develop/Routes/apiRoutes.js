const router = require("express").Router();
const storage = require("../db/storage");

router.get("/notes/", function(req, res) {
    storage
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
  });

  router.post("/notes/", function(req, res) {
    storage
    .addNote()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
  });


  router.delete("/notes/:id", function(req, res) {
      storage
      .removeNote()
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
});

module.exports = router;

