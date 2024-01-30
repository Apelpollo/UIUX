const express = require('express')
const userModel = require('./user')

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const usuarios = await userModel.find();
        return res.json(usuarios);
      } catch (error) {
        res.json(error);
      }
})


router.get('/users/:id', async (req, res) => {
  try {
      const usuarios = await userModel.findById(req.params.id);
      return res.json(usuarios);
    } catch (error) {
      res.json(error);
    }
})



router.post('/users', async (req, res) => {
  try {
    const user = new userModel(req.body);
    const saved = await user.save();
    console.log(saved);
    res.json("Usuario guardado");
  } catch (error) {
    console.error("Error en POST /users:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

router.delete('/users/:id', async(req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    return res.json(user);
  } catch (error) {
    res.json({ msg: "No se pudo eliminar el usuario" });
  }
})

router.put('/users/:id', async(req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(user)
} catch (error) {
    res.json(error)
}
})


module.exports = router;