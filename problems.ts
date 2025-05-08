function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
        return input.toUpperCase()
    } else {
        return input.toLowerCase();
    }

};

const myName = formatString("akmal");

// console.log(myName);
// -------------------2
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(singleItem => singleItem.rating >= 4)
}

const ratedBooks = filterByRating(books);
// console.log(ratedBooks)

// --------------3
function concatenateArrays<T>(...arrays: T[][]): T[] {

    const result = [];

    for (const a of arrays) {
        for (const i of a) {
            result.push(i);
        }
    }
    return result
}
const result1 = concatenateArrays(["a", "b"], ["c"]);

const result2 = concatenateArrays([1, 2], [3, 4], [5]);

// console.log(result1);
// console.log(result2);

// --------------------4

class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    };
    getInfo(): string {
        return `Make: ${this.make}, year: ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model;
    }
    getModel(): string {
        return `Model: ${this.model}`
    }
}


// const myCar = new Car("Toyota", 2020, "Corolla");

// console.log(myCar.getInfo())
// console.log(myCar.getModel())


// --------------------------5


function processValue(value: string | number): number {

    if (typeof value === 'string') {
        return value.length;
    }
    else if (typeof value === 'number') {
        return value * 2
    }
    else {
        return 0;
    }
}

const result3 = processValue('hellow');
const result4 = processValue(2);
// console.log(result4);
// console.log(result3);

// ----------------------------------6
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null;
    }

    let topExpensive = products[0];

    for (let product of products) {
        if (product.price > topExpensive.price) {
            topExpensive = product
        };
    }
    return topExpensive;

}
// 
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

const result = getMostExpensiveProduct(products);
//  console.log(result)

// -----------------------7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {

    if (day === Day.Sunday) {
        return "WeekEnd"
    }
    else if (day === Day.Saturday) {
        return "WeekEnd"
    }
    else {
        return "WeekDay"
    }
}

const result5 = getDayType(Day.Sunday);
const result6 = getDayType(Day.Monday);
const result7 = getDayType(Day.Saturday);
// console.log(result7)


// -------------8

async function squareAsync(n: number): Promise<number> {
    return new Promise((reslove, reject) => {
        setInterval(() => {
            if (n < 0) {
                reject("Negative number not allowed");
            }
            else {
                reslove(n * n)
            }
        }, 1000);
    })
}

squareAsync(4).then(console.log);

// squareAsync(-3).catch(console.error); 