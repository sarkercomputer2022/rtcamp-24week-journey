function greet(name){
    return console.log(name) ;
}
var hello ="Hello Subhash";
greet(hello);

let arrFun = (a,b) => a+b;


console.log(arrFun(1,2));

function message(msg="message"){
    console.log(msg);
}
message();
message("hi");

function processUserInput(callback) {
  let name = "Subhash";
  callback(name);
}
processUserInput(function(name) {
  console.log(`User is: ${name}`);
});

