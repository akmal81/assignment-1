function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase()
    }

};


const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(singleItem => singleItem.rating >= 4)
}



function concatenateArrays<T>(...arrays: T[][]): T[] {

    const result = [];

    for (const a of arrays) {
        for (const i of a) {
            result.push(i);
        }
    }
    return result
}


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






async function squareAsync(n: number): Promise<number> {
    return new Promise((reslove, reject) => {
        setInterval(() => {
            if (n < 0) {
                reject(`Error: Negative number not allowed`);
            }
            else {
                reslove(n * n)
            }
        }, 1000);
    })
}

