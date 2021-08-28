const router = require('express').Router()
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    res.render('homepage');
})

router.get('/dashboard', withAuth, async (req,res) => {
    return
})


module.exports = router