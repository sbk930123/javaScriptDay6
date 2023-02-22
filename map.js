const arr = new Array();

// console.log(typeof arr);

arr.push(1);
arr.push(2);


// console.log(arr);

const obj = new Object();
// console.log(typeof obj);
obj.name = 'smith';
obj.age = 20;
// console.log(obj);


const map1 = new Map();

// console.log(map1);

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// console.log(typeof map1);
// console.log(map1);

// console.log(map1.get('a'));

map1.set('a', 100);
// console.log(map1.get('a'));
// console.log(map1.size);
map1.delete('b');
// console.log(map1);


// 2차원 배열
const arr2 = [
  ['name', 'smith'],
  ['age', 20],
  ['height', 100]
];

const map2 = new Map(arr2);
// console.log(map2);

const arr3 = [
  ['name', 'smith'],
  ['address', 'galmadong'],
  ['zipcode', 12345],
]

// Map의 유일성
// const merged = new Map([...arr2, ...arr3]);
// console.log(merged);

const arr4 = [
  ['name', 'Tom'],
  ['address', 'bbbbbb'],
  ['zipcode', 12345],
]

// Map의 유일성
const merged = new Map([...arr2, ...arr3, ...arr4]);
// console.log(merged);

// 다양한 데이터타입을 키값으로 가질 수 있음
const myMap = new Map();
const keyString = 'a string';
const keyObj = [];
const keyFunc = function() {};

myMap.set(keyString, 'this is string');
myMap.set(keyObj, 'this is object');
myMap.set(keyFunc, 'this is function');

// console.log(myMap);


// Map의 forEach

// console.log(merged);

merged.forEach(function(value, key) {
  // console.log(key, ": " + value);
})

// console.log(obj['name']);

// set
// 단일구조
// 데이터타입(자료형)과 무관
// 유명한 값을 가진다.

const obj2 = {
  a: 1,
  b: 2
};
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add('some text');
mySet.add(obj2);
console.log(mySet);
console.log(mySet.has(1));
console.log(mySet.has(5));
console.log(mySet.has('SOME TEXT'.toLowerCase()));
console.log(mySet.size);

// set의 forEach문
mySet.forEach(function(value) {
  console.log(value);
})