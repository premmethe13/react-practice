const db = require("../models");
const jwt = require("jsonwebtoken");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phoneNo: req.body.phoneNo,
    address:req.body.address
  };

  User.create(user)
    .then((data) => {
      const token = generateAuthToken({id : data.id,email: data.email});
      res.send({token});
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Users.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Users.",
      });
    });
};

const generateAuthToken=(user)=>{
  const payload = {
    id: user.id,
    email: user.email
  };
  
  const secret = 'Ph@ntomK!ng128900111122223333';
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secret, options);
}

exports.findOne = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  var condition = email ? { email: { [Op.iLike]: `%${email}%` } } : null;

  User.findAll({ where: condition })
    .then((data) => {
      if(data[0].password == password){
        const token = generateAuthToken({id : data[0].id,email: data[0].email});
        res.send({token});
      }
      else{
        res.send({
          message:"Invalid username or password.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Users.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  res.status(403).send({
    message: "Invalid operation",
  });
};