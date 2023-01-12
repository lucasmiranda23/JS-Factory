function createBook(title, author, pages, Chap1, Chap2){
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        bookChapters: {
            chap1: Chap1,
            chap2: Chap2,
        },
        printBook: function(){
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306, 'Fundamentals', '1st law')
const book2 = createBook('Think', 'Napolean', 450, 'Fundamentals', '1st law')

console.log(book1)
console.log(book2)
