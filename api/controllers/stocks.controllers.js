var mongoose = require("mongoose");
var Stock = mongoose.model("Stock");

module.exports.stocksGetAll = function(req, res){
	var offset = 0;
	var count = 3288;
	var maxCount = 3288;
	
	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset, 10);  
	}
	
	if(req.query && req.query.count){
		count = parseInt(req.query.count, 10);  
	}
	
	if(isNaN(offset) || isNaN(count)){
		res
			.status(400)
			.json({
				"message": "If supplied in querystring count and offset should be numbers"
			});
		return;
	}
	 if(count > maxCount){
	 	res
	 		.status(400)
	 		.json({
	 			"message": "Count limit of " + maxCount + " exceeded"
	 		});
	 	return;
	 }
	
	Stock
		.find()
		.skip(offset)
		.limit(count)
		.exec(function(err, stocks){
			if(err){
				console.log("Error finding stocks");
				res
				.status(500)
				.json(err);
			}else{
			console.log("Found stocks", stocks.length);
			res
				.json(stocks);
			}
		});
};

module.exports.stocksGetOne = function(req, res){
	var stockId = req.params.stockId;
	console.log("GET stockId", stockId);
	
	Stock
		.findById(stockId)
		.exec(function(err, doc){
			var response = {
				status: 200,
				message: doc
			};
			if(err){
				console.log("Error finding stock");
				response.status = 500;
				response.message = err;
			}else if(!doc){
				response.status = 404,
				response.message ={
					"message": "Stock Id not found"
				};
			}
			res
				.status(response.status)
				.json(response.message);	
			});
		};
		
 module.exports.stocksSearchOne = function(req, res){
	var Symbol = req.params.symbol;
	console.log("GET stock symbol " , Symbol);
	
	Stock
		.findOne({Symbol: Symbol})
		.exec(function(err, stock){
			var response = {
				status: 200,
				message: stock
			};
			if(err){
				console.log("Error finding stock symbol");
				response.status = 500;
				response.message = err;
			}else if(!stock){
				response.status = 404,
				response.message ={
					"message": "Stock symbol not found"
				};
			}
			res
				.status(response.status)
				.json(response.message);	
			});
		};		
		
	
