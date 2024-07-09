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

    //set data-index attribute for each book
    setBookAttribute();
}



//add attirbute to each book that contains the bookList class
let books = document.getElementsByClassName("bookEntry");

function setBookAttribute()
{
   for(let i = 0; i < books.length; i++)
    {
        books[i].setAttribute('data-index', i);
    } 
}

// var delButton = document.querySelector(".delete")
// delButton.addEventListener("click", function()
// {
//     for(let i = 0; i < books.length; i++)
//     {
//         console.log(books[i].getAttribute('data-index'));
//     }
// })




//user input creates a Book object using the book constructor
//the book constructor is pushed to the myLibrary function
//the DOM reads data from the myLibrary array



//current state: data-attribute list is populating correctly. Need to figoure out how to use the number in the data-attribute to remove the specific DOM node and entry in the array:
    //for example, button in the book with a data-attribute of 3 is clicked, delete the 3rd entry in the array and remove the 3rd node in the nodelist
//