<!-- 1 -->
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

<!-- 2 -->

const ratedBooks = filterByRating(books);
console.log(ratedBooks)

<!-- 3 -->
const result1 = concatenateArrays(["a", "b"], ["c"]);

const result2 = concatenateArrays([1, 2], [3, 4], [5]);

console.log(result1);
console.log(result2);

<!-- 4 -->

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo())

console.log(myCar.getModel())



<!-- 5 -->
const result3 = processValue('hello');
const result4 = processValue(2);
console.log(result4);
console.log(result3);
<!-- 6 -->
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

const result = getMostExpensiveProduct(products);
 console.log(result)

<!-- 7 -->
// const result1 = getDayType(Day.Sunday);
// const result2 = getDayType(Day.Monday);
// const result3 = getDayType(Day.Saturday);
// console.log(result7)
<!-- 8 -->
squareAsync(4).then(console.log);

squareAsync(-3).catch(console.error); 