module.exports = (app) => {
  const StationaryProducts = require("../controllers/StationaryController");
  const DairyProducts = require("../controllers/DairyController");

  var router = require("express").Router();

  router.post("/stationary", StationaryProducts.create);
  router.get("/stationary", StationaryProducts.findAll);
  router.get("/stationary/:id", StationaryProducts.findOne);
  router.put("/stationary/:id", StationaryProducts.update);
  router.delete("/stationary/:id", StationaryProducts.delete);
  router.delete("/stationary", StationaryProducts.deleteAll);

  router.post("/dairy", DairyProducts.create);
  router.get("/dairy", DairyProducts.findAll);
  router.get("/dairy/:id", DairyProducts.findOne);
  router.put("/dairy/:id", DairyProducts.update);
  router.delete("/dairy/:id", DairyProducts.delete);
  router.delete("/dairy", DairyProducts.deleteAll);

  app.use("/products", router);
};
