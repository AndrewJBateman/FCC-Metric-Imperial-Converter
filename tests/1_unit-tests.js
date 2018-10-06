/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) { //test 1
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) { //test 2
      var input = '4.7L';
      assert.equal(convertHandler.getNum(input),4.7);
      done();
    });
    
    test('Fractional Input', function(done) { //test 3
      var input = '3/4gal';
      assert.equal(convertHandler.getNum(input),0.75);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) { //test 4
      var input = '6.4/2lbs';
      assert.equal(convertHandler.getNum(input),3.2);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) { //test 5
       var input = '8.2/5/3lbs';
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    });
    
    test('No Numerical Input', function(done) { //test 6
      var input = 'kg';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  }); //end of getNum tests
  
  suite('Function convertHandler.getUnit(input)', function() { //test 7
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
         assert.equal(convertHandler.getUnit('5'+ele), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) { //test 8
      var input = '50grams';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });  
    
  }); //end getUnit tests
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1,'numbers are close'); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [18.9271, 'L'];
      var expected = 5;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1,'numbers are close'); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [8, 'Mi'];
      var expected = 12.87475;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1,'numbers are close'); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [12.87475, 'Km'];
      var expected = 8;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1,'numbers are close'); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [8, 'lbs'];
      var expected = 3.62873;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1,'numbers are close'); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [3.62873, 'kg'];
      var expected = 8;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1,'numbers are close'); //0.1 tolerance
      done();
    });
    
  });

});