require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

const app = express();
const port = process.env.PORT;
const userRoutes = require('./routes/user.routes');

app.use(cors());
app.use(express.json());

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

(async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://alan:1234@cluster0.thvh9e6.mongodb.net/');
    console.log("Conectado a la base de datos: " + db.connection.name);
  } catch (error) {
    console.log("Error conectando a la base de datos:", error);
  }
})();

app.get('/', (req, res) => {
  res.send({'message':'Hola si sirve'});
});

app.post('/', (req, res) => {
  let nameS = req.body.name;
  res.send({'message':`hola lic. ${nameS}`});
});

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
