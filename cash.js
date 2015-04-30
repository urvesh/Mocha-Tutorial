var C = {};

C.getChange = function(totalPayable, cashPaid) {
	'use strict';
	
	var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
	var remaining = cashPaid - totalPayable;
	var change = [];

	while (remaining > 0) {
		for (var i = 0; i < coins.length; i++) {
			if (remaining - coins[i] >= 0) {
				remaining -= coins[i];
				change.push(coins[i]);
				break;
			}
		}
	}
	return change;
};

module.exports = C;
