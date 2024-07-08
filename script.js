const myLibrary = [];

function Book(title, author, pages, read)
{
    let hasRead;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary()
{

}


let myBook = new Book("JEE", "JERJEK", 2323, true);
let myBook2 = new Book("JEE", "JERJdsadEK", 2323, true);
let myBook3 = new Book("JEdsadsE", "JERJdsadEK", 2323, true);


myLibrary.push(myBook);
myLibrary.push(myBook2);
myLibrary.push(myBook3);
console.log(myLibrary);



for(let i = 0; i < myLibrary.length; i++)
{
    const ele = document.getElementById("books");
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookEntry");
    
    const titlePara = document.createElement("p");
    titlePara.textContent = `Title: ${myLibrary[i].title}`;
    bookDiv.appendChild(titlePara);
    
    const authorPara = document.createElement("p");
    authorPara.textContent = `Author: ${myLibrary[i].author}`;
    bookDiv.appendChild(authorPara);
    
    const pagesPara = document.createElement("p");
    pagesPara.textContent = `Pages: ${myLibrary[i].title}`;
    bookDiv.appendChild(pagesPara);
    
    ele.appendChild(bookDiv);
    bookDiv.appendChild(titlePara);
}


//todo: set up the DOM nodes in JavaScript to append a book div to the container
//get user input
//user input creates a Book object using the book constructor
//the book constructor is pushed to the myLibrary function
//the DOM reads data from the myLibrary array