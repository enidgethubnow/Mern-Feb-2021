
                 1
/// GIVEN
console.log(hello);
var hello = "world";  

// seen by the interpreter
var hello; 
console.log(hello);  // logs undefined
hello = "world"; 


               2


// GIVEN
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

// seen by the interpreter
function test() {
  var needle = "magnet";
  console.log(needle);
}
var needle;
    needle = "haystack";
  test();

// output
magnet



               3

 
// GIVEN
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
var brendan;

// seen by the interpreter
function print() {
  brendan = "only okay";
  console.log(brendan);
}
var brendan;
brendan = "super cool";
print();
console.log(brendan);

// output
only okay
only okay


               4  

// GIVEN
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

// seen by the interpreter
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";
 }

var food;
food = "chicken";
  console.log(food);
  eat();

// output
  chicken
  half-chicken


             5

// GIVEN
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

// seen by the interpreter
                
function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
var mean;
mean();
console.log(food);

// output
TypeError: mean is not a function


             6

// GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
console.log(genre);
}
console.log(genre);


// seen by the interpreter
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
console.log(genre);
}
var genre;
  console.log(genre);
  genre = "disco";
  rewind();
console.log(genre);

// output
undefined
rock
r&b
disco



               7  

// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
 var dojo;

 // seen by the interpreter

function learn() {
  var dojo
  console.log(dojo);
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
dojo = "san jose";    
console.log(dojo);
learn();
console.log(dojo);

// output:
san Jose,  
undefined, scoped
seattle, burbank, san Jose


                 8


// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

// seen by the interpreter

function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Jerome", 65));
console.log(makeDojo("Octavia", 0));

output:
   TypeError: Assignment to constant variable 


