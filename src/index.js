import "./pages/index.css"; // добавьте импорт главного файла стилей
// const image = new URL("./images/image.jpg", import.meta.url);
// const imageArr = [
//   {
//     name: "The only image",
//     link: image,
//   },
// ];

const weather = {
  today: 2,
  tomorrow: -2,
};

const day = {
  today: "monday",
  tomorrow: "not monday",
};

console.log(day.today, weather);
console.log(12, 2, 2, 3, 23, 12, 41, 24, 123, 4, 234);
console.log("Hello, World!");

const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10
