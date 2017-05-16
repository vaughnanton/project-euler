//create variable to store total in
var sum = 0
//iterate through from 1 to 999
for (var i=0; i < 1000; i++){
  //if wholly divisible by 3 or 5...
  if (i % 3 === 0 || i % 5 === 0) {
    //...add it to the sum
    var sum += i;
  }
}
