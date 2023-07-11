const {Router} = require('express');
const { check } = require('express-validator');
const { singUp, validationToken,signIn } = require('../controller/auth');
const { validateResult} = require('../helper/validator');
const { validator } = require('../middleware/validator');

const router = Router();

router.post('/singUp', singUp);
router.get('/validationToken', validator,validationToken);
router.post('/signIn',signIn);

module.exports = router;