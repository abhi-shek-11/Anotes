const express = require("express"); // import express package

const app = express(); // create object of imported package
const notes = require("./data/notes");
const dotenv = require("dotenv");

dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id == req.params.id);
  //console.log(req.params);
  res.send(note);
});

const PORT = process.env.PORT || 5000; // get port from env file ,env file doesn't use ';'
app.listen(PORT, console.log(`server started on port ${PORT}`)); // create web server
