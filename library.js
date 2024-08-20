
const myLibrary = [];


function Book(title, author, pages, read, image="https://via.placeholder.com/150"){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = image;
    this.info = function (){
    return `${this.title}, ${this.author}, ${this.pages} pages, ${this.read}`;    }
}   

const got = new Book("Game of Thrones", "George R. R. Martin", 694, 'not read yet', "https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg");
const hp = new Book("Harry Potter", "J.K. Rowling", 500, 'read', "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg");
const lotr = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1216, 'read', "https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover-232x300.jpg");
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, 'read', "https://cdn.kobo.com/book-images/cf32789f-22db-4ad0-bba4-9c0bf69fb872/353/569/90/False/the-hobbit.jpg");
const tkam = new Book("To Kill a Mockingbird", "Harper Lee", 281, 'not read yet', "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg");
const gatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, 'read', "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg");
const mobyDick = new Book("Moby Dick", "Herman Melville", 635, 'not read yet', "https://static01.nyt.com/images/2011/10/22/books/review/moby-dick-slideshow-slide-V7YU/moby-dick-slideshow-slide-V7YU-articleLarge.jpg?quality=75&auto=webp&disable=upscale");
const warPeace = new Book("War and Peace", "Leo Tolstoy", 1225, 'not read yet', "https://m.media-amazon.com/images/I/71wXZB-VtBL._AC_UF1000,1000_QL80_.jpg");
const annaKarenina = new Book("Anna Karenina", "Leo Tolstoy", 864, 'not read yet', "https://cdn.kobo.com/book-images/795f96dc-e5cc-428f-92e8-64cc0e11c908/1200/1200/False/anna-karenina-146.jpg");


function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(got);
addBookToLibrary(hp);
addBookToLibrary(lotr);
addBookToLibrary(hobbit);
addBookToLibrary(tkam);
addBookToLibrary(gatsby);
addBookToLibrary(mobyDick);
addBookToLibrary(warPeace);
addBookToLibrary(annaKarenina);



function displayBooks(library){
    const bookContainer = document.querySelector('.books');
    bookContainer.innerHTML = '';  
    for (let i = 0; i < library.length; i++){
        const book = document.createElement('div');
        book.classList.add("book");
        book.setAttribute('id', library[i].title);
        const cover = document.createElement('img');
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', library[i].title);
        removeButton.textContent = "X";
        removeButton.addEventListener('click', function(e){
            let bookToRemove = e.target.id;
            let index = myLibrary.findIndex(book => book.title === bookToRemove);
            myLibrary.splice(index, 1);
            displayBooks(myLibrary);
        })
        book.appendChild(removeButton);
        if (library[i].image){
            cover.src = library[i].image;

        }else{
            cover.src = "https://via.placeholder.com/150";
        }
        book.appendChild(cover);
        const title = document.createElement('h2');
        title.textContent =  library[i].title;
        book.appendChild(title);
        const author = document.createElement('p');
        author.textContent = "Author: " + library[i].author;
        book.appendChild(author);
        const pages = document.createElement('p');
        pages.textContent = "Pages: " + library[i].pages;
        book.appendChild(pages);
        const read = document.createElement('p');
        read.textContent = "Read: " + library[i].read;
        book.appendChild(read);
        bookContainer.appendChild(book);
    }
}

displayBooks(myLibrary)


let newBookForm = document.getElementById('newBookForm')


newBookForm.addEventListener('submit', function(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readOptions = document.getElementsByName('read');
    let read ="";
    for (let option of readOptions){
        if (option.checked){
            read = option.value;
        }
    }
    let image = document.getElementById('img-link').value;

    console.log(title, author, pages, read, image);
    let newBook = new Book(title, author, pages, read, image);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
    newBookForm.reset();
})

