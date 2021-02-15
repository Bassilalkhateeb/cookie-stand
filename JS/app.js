'use strict';



function getRandomNumberOfCustomersPerHour(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let workingHour =['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {

  minHourlyCustomer: 23,

  maxHourlyCustomer: 65,

  customerPerHour: 0,

  avgCookiesPerCustomer: 6.3



};


