//Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
// Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"
String.prototype.filter = function (banned) {
    let arr = this.split(' ');
    let arr1 = arr.filter(function (elem, i, array) {
        let ret = true;
        for (let j = 0; j < banned.length; j++) {
            if (banned[j] == elem) {
                ret = false;
                break;
            }
        }
        return ret;
    });
    return arr1.join(' ');
}
console.log("This house is not nice!".filter(['not']));
document.getElementById('Exercise1').innerHTML += "This house is not nice!".filter(['not']);


//Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted,
// Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]
Array.prototype.bubbleSort = function () {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());
document.getElementById('Exercise2').innerHTML += [6, 4, 0, 3, -2, 1].bubbleSort();


// Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
// is now teaching [subject]. Create a Teacher object and call its teach method.
// Also do the same thing using Object.create. When using Object.create you will need a
// factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.
const Person = function (name) {
    this.name = name;
}
const Teacher = function (name) {
    Person.call(this, name);
}
Teacher.prototype.teach = function (subject) {
    console.log(this.name + ' is now teaching ' + subject);
    document.getElementById('Exercise3').innerHTML += this.name + ' is now teaching ' + subject + '<br/>';
}
const tina = new Teacher('Tina');
tina.teach('WAP');


const PersonI = {
    name: "unknown"
}
const Teacher2 = Object.create(PersonI);
Teacher2.name = 'Tina2';
Teacher2.teach = function (subject) {
    console.log(this.name + ' is now teaching ' + subject);
    document.getElementById('Exercise3').innerHTML += this.name + ' is now teaching ' + subject + '<br/>';
};
Teacher2.teach("WAP2");

// Exercise 4:
// Write code that will create person, student, and professor objects.
// • Person objects have
//  o name and age fields
//  o a greeting method that prints out: “Greetings, my name is [name] and I am
//    [age] years old.”
//  o a salute method that prints out: “Good morning!, and in case I dont see you,
// good afternoon, good evening and good night!”
// • Student objects inherit name, age, and salute from person. They also have a field
//    ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
//    [name] and I am studying [major]. The greeting should be output to the console.
// • Professor objects inherit name, age, and salute from person. They also have a field
//    ‘department’ and have their own greeting method. Their salutation is “Good day,
//    my name is [name] and I am in the [department] department.” Output it to the
//    console.
// • Create a professor object and a student object. Call both the greeting and salutation
//    methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
//    using the function constructor approach.
const Person2 = function (name, age) {
    this.name = name;
    this.age = age;
}
Person2.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.name + ' and I am ' + this.age + "years old.");
    document.getElementById('Exercise4').innerHTML += "Greetings, my name is " + this.name + ' and I am ' + this.age + "years old." + '<br/>';
}
Person2.prototype.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
    document.getElementById('Exercise4').innerHTML += "Good morning!, and in case I don't see you, good afternoon, good evening and good night!" + '<br/>';
}
const Student = function (name, age, major) {
    this.major = major;
    Person2.call(this, name, age);
}
Student.prototype = Object.create(Person2.prototype);
Student.prototype.greeting = function () {
    console.log("Hey, my name is " + this.name + ' and I am studying ' + this.major + "");
    document.getElementById('Exercise4').innerHTML += "Hey, my name is " + this.name + ' and I am studying ' + this.major + '<br/>';
}
const Professor = function (name, age, department) {
    this.department = department;
    Person2.call(this, name, age);
}
Professor.prototype = Object.create(Person2.prototype);
Professor.prototype.greeting = function () {
    console.log("Good day, my name is " + this.name + ' and I am in the ' + this.department + " department.");
    document.getElementById('Exercise4').innerHTML += "Good day, my name is " + this.name + ' and I am in the ' + this.department + " department." + '<br/>';
}
const professor1 = new Professor('Tina1', 18, 'CS');
professor1.greeting();
professor1.salute();
const student1 = new Student('Tom1', 19, 'MBA');
student1.greeting();
student1.salute();

const PersonII = {
    name: "unknown",
    age: 0,
    greeting: function () {
        console.log("Greetings, my name is " + this.name + ' and I am ' + this.age + "years old.");
        document.getElementById('Exercise4').innerHTML += "Greetings, my name is " + this.name + ' and I am ' + this.age + "years old." + '<br/>';
    },
    salute() {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
        document.getElementById('Exercise4').innerHTML += "Good morning!, and in case I don't see you, good afternoon, good evening and good night!" + '<br/>';
    }
};

const Student2 = Object.create(PersonII);
Student2.name = 'Tom2';
Student2.age = 19;
Student2.major = 'MBA';
Student2.greeting = function () {
    console.log("Hey, my name is " + this.name + ' and I am studying ' + this.major + "");
    document.getElementById('Exercise4').innerHTML += "Hey, my name is " + this.name + ' and I am studying ' + this.major + '<br/>';
};

const Professor2 = Object.create(PersonII);
Professor2.name = 'Tina2';
Professor2.age = 18;
Professor2.department = 'CS';
Professor2.greeting = function () {
    console.log("Good day, my name is " + this.name + ' and I am in the ' + this.department + " department.");
    document.getElementById('Exercise4').innerHTML += "Good day, my name is " + this.name + ' and I am in the ' + this.department + " department." + '<br/>';
};
Professor2.greeting();
Professor2.salute();
Student2.greeting();
Student2.salute();
