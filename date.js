

module.exports.getDate = getDate; // when this file is used as a module, the exports function
//  will export the function or parameter assigned to it, and the function name is passed and
//    and paranthesis is not added otherwise it will call the function. this exports function
//      or entity is an object.

function getDate(){
  var today = new Date(); // date initializer
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-GB" , options);
};

exports.getDay = function (){
  var today = new Date(); // date initializer
  var options = {
    weekday: "long",
  }
  return today.toLocaleDateString("en-GB" , options);
}
