const {
  getStationaryProduct,
  getStationaryProductById,
  getStationaryProducts,
  saveStationaryProduct,
  updateStationaryProduct,
  deleteStationaryProduct,
} = require("../Controller/StationaryController");

const {
  getDairyProduct,
  getDairyProductById,
  getDairyProducts,
  saveDairyProduct,
  updateDairyProduct,
  deleteDairyProduct,
} = require("../Controller/DairyController");

const express = require("express");
const routes = express.Router();

// Stationary Products API
routes.get("/", getStationaryProducts);
routes.get("/stationary/:id", getStationaryProductById, getStationaryProduct);
routes.post("/stationary/add", saveStationaryProduct);
routes.put(
  "/stationary/update/:id",
  getStationaryProductById,
  updateStationaryProduct
);
routes.delete(
  "/stationary/delete/:id",
  getStationaryProductById,
  deleteStationaryProduct
);

// Dairy Products API
routes.get("/", getDairyProducts);
routes.get("/stationary/:id", getDairyProductById, getDairyProduct);
routes.post("/stationary/add", saveDairyProduct);
routes.put("/stationary/update/:id", getDairyProductById, updateDairyProduct);
routes.delete(
  "/stationary/delete/:id",
  getDairyProductById,
  deleteDairyProduct
);

module.exports = routes;
