
const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuarios_controller');;

router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuarios);//agregar datos
router.post('/login_2', usuario.logear);//confirmar si existe usuario
router.delete('/:id', usuario.deleteUsuario);

module.exports = router;
