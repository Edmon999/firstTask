const arr = [];
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 100);
  arr.push(num);
}
console.log(arr);
let newArr = arr.filter((el) => el % 2 === 0);
console.log(newArr);
