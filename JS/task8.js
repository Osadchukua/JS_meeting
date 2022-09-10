const objectData = {
  a: 67,
  str: '89',
  num: 17,
  bool: true,
}

// function calculateDatacon(params) {
//   let sum = 0;
//   Object.keys(params).forEach(key => {
//     if (typeof params[key] === 'number') {
//       sum += params[key]
//     }
//   } ) 
//   return sum;
// }

function calculateDatacon(params) {
  return Object.keys(params).reduce((sum, key) => {
    if (typeof params[key] !== 'number') {
      console.log(sum)} 
      else {
      sum += params[key]
    }
  }, 0) 
}

const result = calculateDatacon(objectData);
console.log(result);