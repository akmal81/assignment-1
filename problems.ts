function formatString(input: string, toUpper?: boolean): string{
    if (toUpper){
        return input.toUpperCase()
    }else{
        return input.toLowerCase();
    }
    
};

const myName = formatString("akmal");

// console.log(myName);

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

function filterByRating(items: { 
    title: string; 
    rating: number 
}[]): { title: string; rating: number }[]{
    // return [{title:'akmal', rating: 3}, {title:'akmal', rating: 3}, {title:'akmal', rating: 3}]
    return items.filter(singleItem => singleItem.rating >= 4)
}

const ratedBooks= filterByRating(books);
// console.log(ratedBooks)





