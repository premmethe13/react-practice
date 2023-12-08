const db = require("../models");
const StationaryProduct = db.stationary;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const stationary = {
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
  };

  StationaryProduct.create(stationary)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Stationary product.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  StationaryProduct.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Stationary product.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  StationaryProduct.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Stationary product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Stationary product with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  StationaryProduct.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stationary product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Stationary product with id=${id}. Maybe Stationary product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Stationary product with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  StationaryProduct.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stationary product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Stationary product with id=${id}. Maybe Stationary was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stationary product with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  StationaryProduct.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Stationary products were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Stationary products.",
      });
    });
};