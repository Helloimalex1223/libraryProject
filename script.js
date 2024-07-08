const myLibrary = [];

function Book(title, author, pages, read)
{
    let hasRead;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

letbookVal = 0;


//adds book to library based on the user's input
function addBookToLibrary(title, author, pages, read)
{
    let myBook = new Book(title, author, pages, read);
    myLibrary.push(myBook);
}


//get user input from form. 

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function()
{
    const formBookTitle = document.getElementById("title").value;
    const formBookAuthor = document.getElementById("author").value;
    const formBookPages = document.getElementById("pages").value;
    const formBookRead = document.getElementById("read").value;
    addBookToLibrary(formBookTitle, formBookAuthor, formBookPages, formBookRead);  
})


// let myBook = new Book("JEE", "JERJEK", 2323, true);


// myLibrary.push(myBook);
// myLibrary.push(myBook2);
// myLibrary.push(myBook3);
console.log(myLibrary);


//add info from myLibrary array to the DOM
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

    const isReadPara = document.createElement("p");
    isReadPara.textContent = `Read: ${myLibrary[i].read}`;
    bookDiv.appendChild(isReadPara);
    
    ele.appendChild(bookDiv);
    bookDiv.appendChild(titlePara);
}

//user input creates a Book object using the book constructor
//the book constructor is pushed to the myLibrary function
//the DOM reads data from the myLibrary array




//todo:
//finish form functionality (have it update the DOM correctly)
//Cleanup DOM appends when creating a book object?
//Create delete button that deletes the array values for a book