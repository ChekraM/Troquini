const { Troc } = require("../Mongoose/Models/troc");

const getTrocs = (req, res) => {
  Troc.find((err, data) => {
    if (err) res.send(err);
    else res.json(data);
  });
};

const geter = (req, res) => {
  Troc.find()
    .then(trocs => res.json(trocs))
    .catch(err => res.status(404));
};

const test = (req, res) => res.json({ msg: "Posts Works" });

const addTroc = (req, res) => {
  console.log(req.body);
  const newTroc = new Troc(req.body);
  console.log("body", newTroc);
  newTroc.save().then(post => res.json(post));
};

const editTroc = (req, res) => {
  let trocId = req.params.id;
  let editedTroc = req.body;
  Troc.findOneAndUpdate({ _id: trocId }, editedTroc, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

const deleteTroc = (req, res) => {
  let trocId = req.params.id;
  Troc.findOneAndRemove({ _id: trocId }, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

module.exports = { addTroc, getTrocs, editTroc, deleteTroc, test, geter };
//  module.exports = { addTroc,  getTrocs,test , geter};
