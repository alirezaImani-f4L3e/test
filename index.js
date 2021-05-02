var watch = document.getElementById('demo');

var time = new Date();

watch.innerHTML = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;

setInterval(function() {
    var time = new Date();

    watch.innerHTML = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;


}, 1000);



// function Person(name, family, age, height, wheight) {
//     let first = name[0];
//     first = first.toUpperCase();

//     name = `${first}${name.slice(1,name.length)}`


//     this.name = name;
//     this.family = family;
//     this.age = age;
//     this.height = height;

//     this.wheight = wheight;
//     this.BMI = function() {
//         let Bmi = wheight / ((height / 100) * (height / 100));
//         return Bmi;
//     }


// }

// var person1 = new Person("ali", "imani ", 20, 186, 94);
// console.log(person1);
// console.log(person1.BMI());

alert("hello world");