const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = {
  ...john,
  name: 'Jane',
  hobbies: ['MuayThai', 'Programming'] // in this part the Jane's hobbies should be concatenated with Jhon's hobbies
}                                      // the code should be this: hobbies: [...jhon.hobbies, 'MuayThai', 'Programming'] - my mistake....

console.log('John:', john)
console.log('Jane:', jane)