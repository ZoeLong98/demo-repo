const sumEven = (arr) => {
  return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
};

console.log(sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30
