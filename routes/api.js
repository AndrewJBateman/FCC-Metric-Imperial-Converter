/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
	const convertHandler = new ConvertHandler();

	app.route('/api/convert').get(function (req, res) {
		var input = req.query.input;
		var initNum = convertHandler.getNum(input);
		var initUnit = convertHandler.getUnit(input);

		if (initNum == 'invalid number' && initUnit == 'invalid unit') {
			res.send('invalid number and unit');
		} else if (initUnit == 'invalid unit') {
			res.send('invalid unit');
		} else if (initNum == 'invalid number') {
			res.send('invalid number');
		}

		var returnUnit = convertHandler.getReturnUnit(initUnit);
		var returnNum = convertHandler.convert(initNum, initUnit);
		var toString = convertHandler.getString(
			initNum,
			initUnit,
			returnNum,
			returnUnit
		);

		res.json({
			initNum: initNum,
			initUnit: initUnit,
			returnNum: returnNum,
			returnUnit: returnUnit,
			string: toString,
		});
	});
};
