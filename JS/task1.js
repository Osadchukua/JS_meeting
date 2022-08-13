// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами

const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

function changeArray(array, str) {
  const newArray = [...array];

  newArray.splice(newArray.indexOf(str), 1);
  //   console.log(newArray.splice(newArray.indexOf(str), 1));

  return newArray.reverse().join(' ');
}

console.log(changeArray(arr, `foo`));

// ---------------------------------------------------------
    
// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
// function changeArray(array, str) {
//   let idx = array.indexOf(str);

//   return array
//     .slice(0, idx)
//     .concat(array.slice(idx + 1))
//     .reverse()
//     .join(' ');
// }

// console.log(changeArray(arr, `foo`));
