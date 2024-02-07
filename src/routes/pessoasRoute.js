const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();
router.get('/pessoas', (req, res) => PessoaController.getAll(req, res));

module.exports = router;
