// 3 Напишите фукцию преобразования данных
const inputData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 4, name: "Item 4" },
    { id: 7, name: "Item 7" },
];

function normilizeData(data) {
  const objectData = {};
  const arrId = [];
  const mainObject = {};

  data.forEach(item => {
    let itemId = item.id;
    objectData[itemId] = item;
    arrId.push(itemId);
  });

  mainObject.entities = objectData;
  mainObject.byId = arrId;

  console.log(mainObject);
  return mainObject;
}

normilizeData(inputData);

// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });
