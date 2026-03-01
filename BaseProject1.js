// A real world example of fetching data. --

//The dataset of Books of different genre with different publish time
const books = [
    { title: 'Book One', genre: "Fictional", publish: 1999, edition: 2012 },
    { title: 'Book Two', genre: "Non-Fictional", publish: 1990, edition: 2005 },
    { title: 'Book Three', genre: "History", publish: 1996, edition: 2024 },
    { title: 'Book Four', genre: "Science", publish: 1993, edition: 2019 },
    { title: 'Book Five', genre: "History", publish: 1989, edition: 2004 },
    { title: 'Book Six', genre: "Non-Fictional", publish: 1999, edition: 2012 },
    { title: 'Book Seven', genre: "Fictional", publish: 1990, edition: 2010 },
    { title: 'Book Eight', genre: "History", publish: 1991, edition: 2012 },
    { title: 'Book Nine', genre: "Fictional", publish: 1997, edition: 2008 },
    { title: 'Book Ten', genre: "Science", publish: 1993, edition: 2005 },
    { title: 'Book Eleven', genre: "History", publish: 1990, edition: 2007 },
]

//1st fetch - getting books having History related data.
const getBooks = books.filter( (bk) => bk.genre === 'History')

//2nd fetch - getting books which got published after 1995 also from History genre
// const getByPublish = books.filter( (Ed) => {return Ed.publish >= 1995}) //if uses scope must add return call
const getByPublish = books.filter( (Ed) => Ed.publish >= 1995 && Ed.genre === 'Fictional')

// console.log(getBooks);//for 1st fetch
console.log(getByPublish);//for 2nd fetch

//Hence filter op. eases to fetch data from given datasheets
