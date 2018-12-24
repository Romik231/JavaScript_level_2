

function convertationNumberToObject(number){
let number = prompt('Введи число');
let arrNumber = number.split('');
let objUnits = {};
let arrOfNum = num.split('');
while (arrNumber.length < 3) {
    arrNumber.unshift(0);
} if (arrNumber > 3) {
    return null;
} else {
    objUnits['сотни'] = arrOfNum[0];
    objUnits['десятки'] = arrOfNum[1];
    objUnits['единицы'] = arrOfNum[2];
    return objUnits;
  }

}

