// JSON (JavaScript Object Notation)

const user = {
  name: 'smith',
  age: 27,
  job: 'developer',
  email: 'test@mail.com'
}

const json1 = JSON.stringify(user);

console.log(json1);

const user2 = JSON.parse(json1);
console.log(user2);