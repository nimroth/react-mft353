import React from 'react';
import './style.css';
import { add, sub } from './helper.js';
import Multiplication from './helper.js';

export default function App() {
  // const addNum = (a, b) => alert(a + b);

  // addNum(10, 20);

  add(50, 100);
  sub(120, 60);
  Multiplication(2, 3);

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHello = () => console.log(`Hi ${name}`);
  }

  const person = {
    name1: 'Nimroth',
    age: 25,
  };

  const { name1: hgjh, age } = person;

  console.log(`Hi ${hgjh} and you age is ${age}`);

  const person2 = { ...person };

  console.log(person2);

  const person1 = new Person('Nimrothson', '24');
  person1.sayHello();

  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];

  const arr3 = [...arr1, ...arr2];

  console.log(arr3);

  const array1 = [1, 2, 3, 4, 5];

  const mapArr = array1.map((data) => data % 2 === 0);

  console.log(mapArr);
  console.log(array1);

  const mapArr2 = array1.filter((data) => data % 2 === 0);

  console.log(mapArr2);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
