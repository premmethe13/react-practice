const DairyProduct = require("../Models/DairyProduct");

const getDairyProducts = (req, res, next) => {
  DairyProduct.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

const getDairyProductById = (req, res, next) => {
  DairyProduct.findById(req.params.id)
    .then((response) => {
      console.log(response);
      res.DairyProduct = response;
      next();
    })
    .catch((error) => {
      return res.json({ message: error.message });
    });
};

const getDairyProduct = (req, res, next) => {
  res.json(res.DairyProduct);
};

const saveDairyProduct = (req, res, next) => {
  const newDairyProduct = new DairyProduct({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
  });
  newDairyProduct
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

const updateDairyProduct = (req, res, next) => {
  res.DairyProduct.name = req.body.name ? req.body.name : res.DairyProduct.name;
  res.DairyProduct.description = req.body.description
    ? req.body.description
    : res.DairyProduct.description;
  res.DairyProduct.rating = req.body.rating ? req.body.rating : res.DairyProduct.rating;
  res.DairyProduct.price = req.body.price ? req.body.price : res.DairyProduct.price;

  res.DairyProduct.save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

const deleteDairyProduct = (req, res, next) => {
  DairyProduct.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

module.exports = {
  getDairyProduct,
  getDairyProductById,
  getDairyProducts,
  saveDairyProduct,
  updateDairyProduct,
  deleteDairyProduct,
};
