// Examen JavaScript Amaliy savollar

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)
// let son =5
// let mat = son%2
// let alr = alert(mat)


// javob:Pasdan yozib keting kodini

// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт
//   let ran = Math.random()*11
//   let ran1 = Math.floor(ran)
//   let alr = alert(ran1)
// Javob:Pasdan yozib keting kodini

// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!
// let ran = 12.510
//  let ran1 = Math.floor(ran)
//  let alr = alert(ran1)

// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering
// let soz='MARS IT SHOOL'
// let fun = soz.length
// let alr =alert(fun)

// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering
// let soz='MARS IT SHOOL'
// let fun = soz.repeat(10)
// console.log(fun);

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering
// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// console.log(harflar[11] + harflar[3] + harflar[21] + harflar[0]);
// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering
// let sov = prompt('yoshingizni kiriting')
// let svo ={
//     if(sov>18)console.log('Siz balagot yoshiga yetgansiz);
// }else(console.log('siz balogat yoshiga yetmagansiz );)

// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering
// let ism1 = prompt('ismingizni kiriting')
// console.log(ism1.split('').reverse().join(''));
// 9-savol Switch case

// Promt 1 dan 7 gacha bo'lgan raqam kiriting va kiritilgan raqam qaysi hafta kuniga to'gri kelishini chiqarib bering
// masalan 4 raqamini kiritsam console.log da("Siz kiritgan raqam haftaning Payshanba kuniga to'gri keladi") bo'lib chiqish kerak
// agar kiritilgan raqam 7 dan katta bolsa ya'ni 8 yoki 15 kiritilsa console da (Namalum raqam kiritdingiz ) deb chiqish kerak

// ввести в промпт цифру от 1 до 7, и вывести к какому дню недели он равен, если больше 7 то сказать что такого дня нет

// Javob:Kodini yozib bering
//  bu temani hali otmadi
// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов

// Javob :Kodini yozib bering
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

// let juftSonlar = [];


// console.log(juftSonlar);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     juftSonlar.push(numbers[i]);
//   } 
// }

// console.log(juftSonlar);

