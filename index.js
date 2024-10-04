// 문제 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("Alice", 25);

// 문제 2
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog1 = new Dog("Buddy");
dog1.speak();

// 문제 3
class Shape {
    area() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const circle1 = new Circle(5);
console.log(circle1.area());

// 문제 4
class Vehicle {
    constructor() {
        if (new.target === Vehicle) throw new TypeError("Cannot instantiate abstract class");
    }
    move() {
        throw new Error("Method 'move()' must be implemented.");
    }
}
class Car extends Vehicle {
    move() {
        console.log("Car is moving.");
    }
}
const car1 = new Car();
car1.move();

// 문제 5
function Book(title, author) {
    this.title = title;
    this.author = author;
}
const book1 = new Book("1984", "George Orwell");

// 문제 6
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const user1 = new User("Alice");
user1.name = "Bob";
console.log(user1.name);

// 문제 7
// 함수형 프로그래밍은 순수 함수, 불변성, 고차 함수 등의 개념을 사용하여 코드 예측 가능성을 높임.

// 문제 8
function add(a, b) {
    return a + b;
}
let count = 0;
function increment() {
    count += 1;
}

// 문제 9
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// 문제 10
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, b: 3 };

// 문제 11
function multiply(a) {
    return function(b) {
        return a * b;
    }
}
const double = multiply(2);
console.log(double(5));

// 문제 12
const compose = (f, g) => x => f(g(x));
const square = x => x * x;
const addOne = x => x + 1;
const squareAfterAddOne = compose(square, addOne);
console.log(squareAfterAddOne(2));

// 문제 13
// 모나드는 값을 안전하게 다루기 위한 컨테이너 역할을 하며, 설명하기 어려움으로 인해 '모나드의 저주'라 불림.

// 문제 14
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 문제 15
// OOP는 객체를 사용한 구조적 코드 작성을 지향하며, FP는 함수 조합을 통한 예측 가능성을 강조함.

// 문제 16
class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}
class Child extends Parent {
    greet() {
        console.log("Hello from Child");
    }
}
const child1 = new Child();
child1.greet();

// 문제 17
// 함수형 프로그래밍에서 상태 관리는 불변성 유지 및 순수 함수를 통해 이루어짐.

// 문제 18
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
}
const animal1 = new Animal("Dog");
animal1.speak();

// 문제 19
const todos = [
    { id: 1, text: 'FP 공부', completed: false },
];
const addTodo = (todos, newTodo) => [...todos, newTodo];
const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);
const toggleTodo = (todos, id) => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
