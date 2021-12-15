const express = require("express");
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:3000"
  };


  const db = require('./config/config');
db.authenticate()
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('ERROR: ' + err))

//db.recipes = require("./recipe.model.js")(sequelize, Sequelize);

const app = express();

  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  app.get("/", (req, res) => {
    res.json({ title: "Welcome to IT390." });
  });

  app.use('/recipes', require('./app/routes/recipes'));

  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sync();