

const myLibrary = [];

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


//adds book to library based on the user's input
function addBookToLibrary(title, author, pages, read)
{
    let myBook = new Book(title, author, pages, read);
    myLibrary.push(myBook);
    addTolibraryGUI(myBook);
}

//set the variable to be called later for a book's unique data attribute:
let bookVal = 0;

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
    {
        event.preventDefault();
    }
);

console.log(myLibrary);

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

    ele.appendChild(bookDiv);
    bookDiv.appendChild(titlePara);

    //add the remove button for each book entry
    removeButton = document.createElement("button");
    removeButton.textContent = `Remove Book`;
    removeButton.classList.add("remove");
    bookDiv.appendChild(removeButton);

    //add the delete button for each book entry
    const readButton = document.createElement("button");
    readButton.textContent = `Read`;
    readButton.classList.add("read");
    bookDiv.appendChild(readButton);

    //populates nodelist with latest remove button
    addListener();
}


let books = document.getElementsByClassName("bookEntry");

//user input creates a Book object using the book constructor
//the book constructor is pushed to the myLibrary function
//the DOM reads data from the myLibrary array

//adds the event listener to the buttons created in the DOM
let buttonList;

function addListener()
{
    buttonList = document.getElementsByClassName("remove");

    for(let k = 0; k < buttonList.length; k++)
    {
        //sets data-attribute for the list of remove buttons 
        buttonList[k].addEventListener("click", btnClicked)
        buttonList[k].setAttribute('data-index', k);
    }
}

//when the remove button is clicked, remove the node and book object corresponding to the buttons data-attribute number
function btnClicked(e)
{
    let btn = e.currentTarget;
    let buttonValue = btn.getAttribute('data-index');

    removeNode(buttonValue);
}

//adds event listener to the "remove" buttons. When a button is clicked, it triggers the function to remove the node using the button's place in the button list collection

//removes the node from the DOM tree when the "remove" button is clicked
function removeNode(num)
{
    myLibrary.splice(num);
    books[num].remove();
    console.log(`my library array:`);
    console.log(myLibrary);

    console.log(`books array:`);
    console.log(books);
    
    console.log(`Remove button list:`);
    console.log(buttonList);
}

//TODO: Bug when I remove a value in the myLibray array -- something wrong with the logic.
    //Need to test this more
