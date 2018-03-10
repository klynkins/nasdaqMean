var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js'); 
var ctrlQuery = require('../controllers/query.controllers.js');

router
	.route('/stocks')
	.get(ctrlStocks.stocksGetAll); 
 
router
	.route('/stocks/:stockId')
	.get(ctrlStocks.stocksGetOne);

router
	.route('/stocks/symbol/:symbol')
	.get(ctrlStocks.stocksSearchOne);
	
router
  .route('/query')
  .get(ctrlQuery .searchGetAll)
  .post(ctrlQuery.addSearch);

router
	.route('/users/register')
	.post(ctrlUsers.register);
	
router
	.route('/users/login')
	.post(ctrlUsers.login);	

module.exports = router;
