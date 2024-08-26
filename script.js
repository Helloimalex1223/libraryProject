

const myLibrary = [];

class Book
{
    constructor(title, author, pages, read)
    {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}


//adds book to library based on the user's input
function addBookToLibrary(title, author, pages, read)
{
    let myBook = new Book(title, author, pages, read);
    myLibrary.push(myBook);
    addTolibraryGUI(myBook);
}

var randomColor = Math.floor(Math.random()*16777215).toString(16);


//get user input from form when the Submit button is clicked

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function()
{
    const formBookTitle = document.getElementById("title").value;
    const formBookAuthor = document.getElementById("author").value;
    const formBookPages = document.getElementById("pages").value;
    const formBookRead = document.getElementById("read");

    let isChecked = false;
    if(formBookRead.checked)
    {
        isChecked = true;
    }
    else
    {
        isChecked = false;
    }

    addBookToLibrary(formBookTitle, formBookAuthor, formBookPages, isChecked);

    //resets the form after the user submits it 
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

//define the Read button outside of the function scope so I can change it in the changeRead function below

function addTolibraryGUI(obj)
{
    const ele = document.getElementById("books");
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookEntry");
    
    const titlePara = document.createElement("h3");
    titlePara.textContent = `${obj.title}`;
    bookDiv.appendChild(titlePara);
    
    const authorPara = document.createElement("p");
    authorPara.textContent = `Author: ${obj.author}`;
    bookDiv.appendChild(authorPara);
    
    const pagesPara = document.createElement("p");
    pagesPara.textContent = `Pages: ${obj.pages}`;
    bookDiv.appendChild(pagesPara);

    const isReadPara = document.createElement("p");
    isReadPara.classList = "readValue";
    isReadPara.textContent = `Read: ${obj.read}`;
    bookDiv.appendChild(isReadPara);

    ele.appendChild(bookDiv);

    //add the remove button for each book entry
    removeButton = document.createElement("button");
    removeButton.textContent = `Remove Book`;
    removeButton.classList.add("remove");
    bookDiv.appendChild(removeButton);

    //add the delete button for each book entry
    readButton = document.createElement("button");
    readButton.textContent = `Read`;
    readButton.classList.add("read");
    bookDiv.appendChild(readButton);

    //populates nodelist with latest remove button
    addRemoveListener();
    addReadListener();
}


let books = document.getElementsByClassName("bookEntry");

//user input creates a Book object using the book constructor
//the book constructor is pushed to the myLibrary function
//the DOM reads data from the myLibrary array

//adds the event listener to the remove buttons created in the DOM
let buttonRemoveList;

function addRemoveListener()
{
    buttonRemoveList = document.getElementsByClassName("remove");

    for(let k = 0; k < buttonRemoveList.length; k++)
    {
        //sets data-attribute for the list of remove buttons 
        buttonRemoveList[k].addEventListener("click", remBtnClicked);
        buttonRemoveList[k].setAttribute('data-index', k);
    }
}

//adds the event listener to the read buttons created in the DOM
let buttonReadList;

function addReadListener()
{
    //classlist for read buttons
    buttonReadList = document.getElementsByClassName("read");

    for(let j = 0; j < buttonReadList.length; j++)
    {
        //sets data-attribute for the list of remove buttons 
        buttonReadList[j].addEventListener("click", readBtnClicked);
        buttonReadList[j].setAttribute('data-index', j);
    }
}

//when a button is clicked,
    //if remove, remove the node and book object corresponding to the buttons data-attribute number
function remBtnClicked(e)
{
    let btn = e.currentTarget;
    let buttonValue = btn.getAttribute('data-index');
    
    removeNode(buttonValue);
}

    //if read, change the value of the read property
function readBtnClicked(e)
{
    let btn = e.currentTarget;
    let buttonValue = btn.getAttribute('data-index');
    
    changeRead(buttonValue);
}

//removes the node from the DOM tree when the "remove" button is clicked
function removeNode(num)
{
    myLibrary.splice(num, 1);
    books[num].remove();

    //re-calculate the event listener list after an element is removed
    addRemoveListener();
    addReadListener();
}

//changes the value of "read" when the button is clicked
function changeRead(num)
{
    //classlist for "readValue" paragraph elements
    pReadList = document.getElementsByClassName("readValue");

    if(myLibrary[num].read === true)
    {
        myLibrary[num].read = false;
        pReadList[num].textContent = "Read: false";
    }
    else
    {
        myLibrary[num].read = true;
        pReadList[num].textContent = "Read: true";
    }

    //re-calculate the event listener list after an element is removed
    addRemoveListener();
    addReadListener();
}