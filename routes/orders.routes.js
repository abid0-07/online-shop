const express = require('express');

const ordersController = require('../controllers/orders.controller');

const router = express.Router();

router.post('/',ordersController.addOrder); // full routes address: "/orders/

router.get('/', ordersController.getOrders); // full routes address: "/orders" 
module.exports = router;