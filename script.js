const student = {
  firstName: 'Monica',
  // Getter
  get heroName() {
    return this.firstName;
  },

  // setter
  set changeName(newName) {
    this.firstName = newName;
  }
}

// error
console.log(student.heroName);
// error
// student.changeName('Amy');
student.changeName = 'Amy';
console.log(student.heroName);

student.heroName = 'tom'; // getter로는 모든 값을 변경할 수 없음
console.log(student.heroName); // 'Amy' 
