const express = require('express');
const router = express.Router();

const { resuireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById, read, update, purchaseHistory } = require("../controllers/user");

router.get('/secret/:userId', resuireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get('/user/:userId', resuireSignin, isAuth, read);
router.put('/user/:userId', resuireSignin, isAuth, update);
router.get("/orders/by/user/:userId", resuireSignin, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;