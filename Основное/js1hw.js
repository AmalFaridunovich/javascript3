
//Измените размер текста первых двух переменных, чтобы первая была больше, а вторая - меньше. 
//И укажите размеры обеих переменных на консоли. 
//Удалите первое слово третьей переменной и разделите последнее слово пополам запятой. 
//Добавьте в конец имена Алекс и Бобур, заменив числа в четвертой переменной на текст. 
//Удалите точки в слове в пятой переменной и добавьте MathRandom () в ее конец.

let justWords = "Студия бренд-дизайна. Брендинг, упаковка, интерфейсы и 3D-графика. +7 495 647 64 01, info@choice.studio."

let randWord1 = "Студия бренд-дизайна "
let randWord2 = "Брендинг, упаковка "

let randWord3 = "интерфейсы и 3D-графика  "

let randWord4 = 74956476401

let randWord5 = "info@choice.studio."

randWord1 = randWord1.toUpperCase().replace('c' , 'C')
randWord2 = randWord2.replace('Б' , 'б')
randWord3 = randWord3.slice(11,23).replace('-' , ',')
randWord4 = randWord4.toString().replace('74956476401' , 'Алекс и Бобур')
randWord5 = randWord5.replace('.', ' ' ).replace('.', ' ') + Math.random()

justWords = randWord1 + randWord2 + randWord3 + randWord4 + randWord5

console.log(`${randWord1.length}`);
console.log(`${randWord2.length}`);
console.log(randWord3);
console.log(randWord4);
console.log(randWord5);
console.log(justWords);


