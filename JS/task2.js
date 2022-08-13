//додайте "Маракуя" в кінець
// замініть значення "Борщ" на "Роли"
// видаліть перший елемент масиву та виведіть його в консоль
// додайте "Вассабі" та "Угорь" на початок масиву
const menu = ["Суші","Борщ"];

menu.push('Маракуя');
console.log(menu)
menu.splice(1, 1, 'Роли');
console.log(menu);
menu.shift();
console.log(menu);
menu.unshift("Вассабі", "Угорь")
console.log(menu);