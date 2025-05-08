{

    function formatString(input: string, toUpper?: boolean): string {
        const result = toUpper === false ? input?.toLowerCase() : input?.toUpperCase()
        console.log(result)
        return result
    }

    formatString("Hello", false)
    // console.log(stringFormat)


    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        const result = items?.filter(item => item?.rating >= 4)
        console.log(result)
        return result
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.9 },
        { title: "Book C", rating: 5.0 }
    ];

    filterByRating(books);



    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let result: T[] = [];
        arrays.forEach(arr => {
            result = result.concat(arr);
        });
        console.log(result)
        return result;
    }

    concatenateArrays(["a", "b"], ["c"]);
    concatenateArrays([1, 2], [3, 4], [5]);


    class Vehicle {
        constructor(private make: string, public year: number) { }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`)
        }
    }

    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
            super(make, year)
        }
        getModel() {
            console.log(`Model: ${this.model}`)
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    myCar.getModel();  // Output: "Model: Corolla"



    function processValue(value: string | number): number {
        const result = typeof value === 'string' ? value?.length : value * 2
        console.log(result)
        return result
    }

    processValue("hello");
    processValue(10);



    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        const maxPrice = Math.max(...products.map(p => p.price));
        const mostExpensive = products.filter(p => p.price === maxPrice);
        console.log(mostExpensive[0] || null)
        return mostExpensive[0] || null;
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    getMostExpensiveProduct(products);



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
        const result = day === Day?.Saturday || day === Day?.Sunday ? "Weekend" : "Weekday"
        console.log(result)
        return result
    }

    getDayType(Day.Friday);
    getDayType(Day.Sunday);




    async function squareAsync(n: number): Promise<number> {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
    squareAsync(4).then(console.log);        // Output after 1s: 16
    squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
}