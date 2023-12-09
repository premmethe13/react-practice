const db = require("../models");
const DairyProduct = db.dairy;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const dairy = {
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
  };

  DairyProduct.create(dairy)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Dairy product.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  DairyProduct.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Dairy product.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  DairyProduct.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Dairy product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Dairy product with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  DairyProduct.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Dairy product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Dairy product with id=${id}. Maybe Dairy product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Dairy product with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  DairyProduct.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Dairy product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Dairy product with id=${id}. Maybe Dairy was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Dairy product with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  DairyProduct.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Dairy products were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Dairy products.",
      });
    });
};
