{

    function formatString(input: string, toUpper: boolean = true): string {
        if (!toUpper) {
            return input?.toLowerCase()
        } else {
            return input?.toUpperCase()
        }
    }

    const stringFormat = formatString("Hello")

    // console.log(stringFormat)


    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
       return items?.filter(item => item?.rating >= 4)
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.9 },
        { title: "Book C", rating: 5.0 }
    ];

    const filterBooks = filterByRating(books);
    // console.log(filterBooks)

}