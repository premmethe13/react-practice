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
routes.get("/products/stationary", getStationaryProducts);
routes.get("/products/stationary/:id", getStationaryProductById, getStationaryProduct);
routes.post("/products/stationary/add", saveStationaryProduct);
routes.put(
  "/products/stationary/update/:id",
  getStationaryProductById,
  updateStationaryProduct
);
routes.delete(
  "/stationary/delete/:id",
  getStationaryProductById,
  deleteStationaryProduct
);

// Dairy Products API
routes.get("/products", getDairyProducts);
routes.get("/products/dairy/:id", getDairyProductById, getDairyProduct);
routes.post("/products/dairy/add", saveDairyProduct);
routes.put("/products/dairy/update/:id", getDairyProductById, updateDairyProduct);
routes.delete(
  "/products/dairy/delete/:id",
  getDairyProductById,
  deleteDairyProduct
);

module.exports = routes;
