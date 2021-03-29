const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const {
    create,
    listOrders,
    remove,
    getStatusValues, 
    orderById,
    updateOrderStatus
} = require("../controllers/order");
//const { updateOrderStatus } = require("../../aquaponics-front/src/admin/apiAdmin");

router.post(
    "/order/create/:userId",
    //requireSignin,
    //isAuth
    // function(req, res){
    //     requireSignin,
    //     isAuth,
    //     //addOrderToUserHistory,
    //     create
    // }
    create
);

router.delete(
    "/order/:orderId/:userId",
    // requireSignin,
    // isAuth,
    // isAdmin,
    remove
);

router.get("/order/list/:userId", listOrders);
//requireSignin, isAuth, isAdmin, 
router.get("/order/status-values/:userId", getStatusValues);
router.get("/order/:orderId/status/:userId", updateOrderStatus);



router.param("userId", userById);
router.param("orderId", orderById);

module.exports = router;