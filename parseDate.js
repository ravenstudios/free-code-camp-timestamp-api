var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var year;
var month;
var day;
var unix;
var date;
module.exports = function (date) {
  var arr = date.split(" ");//turns string into an array so we can check if the first element is a number or string
  unix = parseInt(arr[0]) * 1000;//convert into millis, even if a string, this will be corrected later

  if(unix / 1 === unix){//unix, if a number will be true

    date = new Date(unix);
    unix = date;
  }
  else{
    date = new Date(date);//natural"

    unix = date.getTime();
  }

  year = date.getFullYear();
  month = months[date.getMonth()];
  day = date.getDate();
  var natural = month + " " + day + ", " + year;

  return {
    "unix": unix,
    "natural": natural
  }
};
