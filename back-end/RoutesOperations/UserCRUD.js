const { User } = require("../Mongoose/Models/user");

const addUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

const getUsers = (req, res) => {
  User.find((err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

const getConnectedUser = (req, res) => {
  User.find(
    { email: req.body.email, passWord: req.body.password },
    (err, data) => {
      if (err) res.send(err);
      else res.send(data);
    }
  );
};

const editUser = (req, res) => {
  let userId = req.params.id;
  let editedUser = req.body;
  User.findOneAndUpdate({ _id: userId }, editedUser, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

const deleteUser = (req, res) => {
  let userId = req.params.id;
  User.findOneAndRemove({ _id: userId }, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

module.exports = { addUser, getUsers, editUser, deleteUser, getConnectedUser };
