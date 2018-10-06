/*
*
*
*       Complete the handler logic below
*       
*       
*/
const 
  unitArray = 
  ["lbs", "kg", "gal", "l", "mi", "km"],
  convUnitArray = 
  { "lbs": "kg", "gal": "l", "mi": "km",
    "kg": "lbs", "l": "gal", "km": "mi"},
  unitTextArray = 
  { "lbs": "pounds",   "gal": "gallons",
    "mi": "miles", "kg": "kilograms", 
    "l": "liters", "km": "kilometers"};

function ConvertHandler() {
   
  this.getNum = function(input){
    var result;
    var numbers = input.replace(/[a-zA-Z&\#,+()$~%'":*?<>{}]+/g, '');
    if (numbers.length == 0) return result = 1;
    let split = numbers.split('/');
    var result = 
        (split.length > 2)? "invalid number" :
        (split.length > 1)? split[0]/split[1] :
        (split.length <= 1)? split.toString() : "invalid number"; 
  	return result;
  };
  
  this.getUnit = function(input) {
    var result;
    result = input.split(/\d+/g).pop(); 
    return (unitArray.indexOf(result.toLowerCase()) >-1)? 
      result : "invalid unit";
  }; 
   
  this.getReturnUnit = function(initUnit){
    var result;
    let initUnitLower = initUnit.toLowerCase();
    return result = (initUnit!== "invalid")? convUnitArray[initUnitLower] : "invalid unit";
  };

  this.spellOutUnit = function(unit) {
    var result;
    result = unitTextArray[unit.toLowerCase()];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()) {
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;      
      case 'km':
        result = initNum / miToKm;
        break;      
      case 'gal':
        result = initNum * galToL;
        break;      
      case 'l':
        result = initNum / galToL;
      break;
    }  
    return result;
  }; //end of this.convert function
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    let roundedNum = +returnNum.toFixed(5);  
    let InitUnit = this.spellOutUnit(initUnit); 
    let ReturnUnit = this.spellOutUnit(returnUnit); 
    result = initNum + " " + InitUnit + " converts to " + roundedNum + " " + ReturnUnit;
    return result;
  }; 
}
module.exports = ConvertHandler;