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
    addTolibraryGUI(myBook);
}

//get user input from form when the Submit button is clicked

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function()
{
    const formBookTitle = document.getElementById("title").value;
    const formBookAuthor = document.getElementById("author").value;
    const formBookPages = document.getElementById("pages").value;
    const formBookRead = document.getElementById("read").value;
    addBookToLibrary(formBookTitle, formBookAuthor, formBookPages, formBookRead);

    document.getElementById("addBookForm").reset();    
})

//prevent the form from submitting when the Submit button is clicked
document.getElementById("addBookForm").addEventListener('submit', function(event)
{event.preventDefault();}
);


//add the latest book from the myLibrary array to the DOM

function addTolibraryGUI(obj)
{
    const ele = document.getElementById("books");
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookEntry");
    
    const titlePara = document.createElement("p");
    titlePara.textContent = `Title: ${obj.title}`;
    bookDiv.appendChild(titlePara);
    
    const authorPara = document.createElement("p");
    authorPara.textContent = `Author: ${obj.author}`;
    bookDiv.appendChild(authorPara);
    
    const pagesPara = document.createElement("p");
    pagesPara.textContent = `Pages: ${obj.title}`;
    bookDiv.appendChild(pagesPara);

    const isReadPara = document.createElement("p");
    isReadPara.textContent = `Read: ${obj.read}`;
    bookDiv.appendChild(isReadPara);


    //add the remove button for each book entry
    const removeButton = document.createElement("button");
    removeButton.textContent = `Remove Book`;
    removeButton.classList.add("remove");
    bookDiv.appendChild(removeButton);

    //add the delete button for each book entry
    const readButton = document.createElement("button");
    readButton.textContent = `Read`;
    readButton.classList.add("read");
    bookDiv.appendChild(readButton);
    
    
    ele.appendChild(bookDiv);
    bookDiv.appendChild(titlePara);
}

//user input creates a Book object using the book constructor
//the book constructor is pushed to the myLibrary function
//the DOM reads data from the myLibrary array

read.addEventListener("click", function()
{
    console.log("CLICKED!");
})
//todo:
//Cleanup DOM appends when creating a book object/put the DOM append functionality in the AddBookToLibrary function
//Create delete button that deletes the array values for a book
//Create read button that changes the value of the read field
//Figure out why the DOM is in a weird order