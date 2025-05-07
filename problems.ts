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
    else{
        return 0;
    }
}

const result3 = processValue('hellow');
const result4 = processValue(2);
console.log(result4);
console.log(result3);

// ----------------------------------6

