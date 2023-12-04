const StationaryProduct = require("../Models/StationaryProduct");

const getStationaryProducts = (req, res, next) => {
  StationaryProduct.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

const getStationaryProductById = (req, res, next) => {
  StationaryProduct.findById(req.params.id)
    .then((response) => {
      console.log(response);
      res.StationaryProduct = response;
      next();
    })
    .catch((error) => {
      return res.json({ message: error.message });
    });
};

const getStationaryProduct = (req, res, next) => {
  res.json(res.StationaryProduct);
};

const saveStationaryProduct = (req, res, next) => {
  const newStationaryProduct = new StationaryProduct({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
  });
  newStationaryProduct
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

const updateStationaryProduct = (req, res, next) => {
  res.StationaryProduct.name = req.body.name
    ? req.body.name
    : res.StationaryProduct.name;
  res.StationaryProduct.description = req.body.description
    ? req.body.description
    : res.StationaryProduct.description;
  res.StationaryProduct.rating = req.body.rating
    ? req.body.rating
    : res.StationaryProduct.rating;
  res.StationaryProduct.price = req.body.price
    ? req.body.price
    : res.StationaryProduct.price;

  res.StationaryProduct.save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

const deleteStationaryProduct = (req, res, next) => {
  StationaryProduct.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

module.exports = {
  getStationaryProduct,
  getStationaryProductById,
  getStationaryProducts,
  saveStationaryProduct,
  updateStationaryProduct,
  deleteStationaryProduct,
};
