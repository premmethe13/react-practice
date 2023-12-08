const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json()); 

app.use(
  express.urlencoded({ extended: true })
); 

const db = require("./models/index");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Products application." });
});

require("./routes/routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
