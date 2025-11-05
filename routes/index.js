const router = require('express').Router();

// Importa o router de contacts
const contactsRoutes = require('./contacts');

// Rotas
router.use('/contacts', contactsRoutes);

// Rota raiz (opcional)
router.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = router;
