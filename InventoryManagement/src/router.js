const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getItems);
router.get('/:id', controller.getItemById);
router.get('/name/:name', controller.getItemByName);
router.get('/stockBetween/:minVal/:maxVal', controller.getItemsWithinStock);
router.get('/stockOut', controller.getItemsOutOfStock);
router.post('/', controller.addItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;