const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrderById);
router.get('/orderId/:orderId', controller.getOrderByOrderId);

module.exports = router;
