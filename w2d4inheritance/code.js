// Exercise 1:
String.prototype.filter = function (...bannedWords) {
    let str = this;
    bannedWords.forEach(word=>{
        if(str.includes("word")){
            str=str.replace(word,"");
        }
    });
    return str;
}

// Exercise 2 - BubbleSort
Array.prototype.bubbleSort = function () {
    let len = this.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (this[i] > this[i + 1]) {
                let tmp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return this;
}

// Exercise 3: Inheritance
const Person = function () {
};

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}

const Teacher = function () {
};

Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

const me = new Teacher();
me.initialize("Anna Bella", 26);
me.teach("EA");