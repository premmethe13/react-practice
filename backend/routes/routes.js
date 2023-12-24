module.exports = (app) => {
  const StationaryProducts = require("../controllers/stationary_controller");
  const DairyProducts = require("../controllers/dairy_controller");
  const User = require('../controllers/user_controller');

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

  router.post("/user", User.create);
  router.get("/user", User.findAll);
  router.post("/auth", User.findOne);
  router.put("/user/:id", User.update);
  router.delete("/user/:id", User.delete);
  router.delete("/user", User.deleteAll);

  app.use("/products", router);
};
