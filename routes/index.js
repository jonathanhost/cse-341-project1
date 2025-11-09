const router = require('express').Router();

router.use('/', require('./swagger'));

// Importa o router de contacts
const contactsRoutes = require('./contacts');

// Rotas
router.use('/contacts', contactsRoutes);

// Rota raiz (opcional)
router.get('/', (req, res) => {
    //#swagger-tags=['Hello World']
    res.send('Hello World');
});

module.exports = router;
