const myLibrary = [];

function Book(title,author,pages,isRead, id){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead, id){
    const book = new Book(title,author,pages,isRead, id);
    // id = myLibrary.length;
    myLibrary.push(book);
}

addBookToLibrary("The Bible", "Jesus", "1000", false, myLibrary.length);
addBookToLibrary("The Bible", "Jesus", "1000", false, myLibrary.length);
addBookToLibrary("The Bible", "Jesus", "1000", false, myLibrary.length);
addBookToLibrary("The Bible", "Jesus", "1000", false, myLibrary.length);

function displayBook(book){
    const libraryHolder = document.querySelector(".library-holder");
    const libraryItem = document.createElement("div");
    libraryItem.setAttribute("class","library-item");
    libraryItem.setAttribute("data-index", book.id);

    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "item-container");

    const span1 = document.createElement("span");
    const pTitleTag = document.createElement("p");
    pTitleTag.textContent = "Title: ";
    const pTitleBook = document.createElement("p");
    pTitleBook.textContent = book.title;
    span1.appendChild(pTitleTag);
    span1.appendChild(pTitleBook);

    const span2 = document.createElement("span");
    const pAuthorTag = document.createElement("p");
    pAuthorTag.textContent = "Author: ";
    const pAuthorBook = document.createElement("p");
    pAuthorBook.textContent = book.author;
    span2.appendChild(pAuthorTag);
    span2.appendChild(pAuthorBook);

    const span3 = document.createElement("span");
    const pPagesTag = document.createElement("p");
    pPagesTag.textContent = "Pages: ";
    const pPagesBook = document.createElement("p");
    pPagesBook.textContent = book.pages;
    span3.appendChild(pPagesTag);
    span3.appendChild(pPagesBook);

    const span4 = document.createElement("span");
    const pReadTag = document.createElement("p");
    pReadTag.textContent = "Read It?: ";
    const pReadBook = document.createElement("p");
    pReadBook.textContent = book.isRead;
    span4.appendChild(pReadTag);
    span4.appendChild(pReadBook);

    const deleteButton = document.createElement("button");
    const readButton = document.createElement("button");
    deleteButton.textContent = "Delete?";
    readButton.textContent = "Toggle Read?";
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("data-index", book.id);
    readButton.setAttribute("class", "read-button");
    readButton.setAttribute("data-index", book.id);

    itemContainer.appendChild(span1);
    itemContainer.appendChild(span2);
    itemContainer.appendChild(span3);
    itemContainer.appendChild(span4);
    itemContainer.appendChild(deleteButton);
    itemContainer.appendChild(readButton);

    libraryItem.appendChild(itemContainer);
    libraryHolder.appendChild(libraryItem);
}

function displayAllBooks(library){
    // const mainContent = document.querySelector(".main-content");
    const holder = document.querySelector(".library-holder");
    // mainContent.removeChild(holder);
    // const newHolder = document.createElement("div");
    // newHolder.setAttribute("class", "library-holder");
    // newHolder.setAttribute("id", "library-holder");
    // mainContent.appendChild(newHolder);
 
    //e.firstElementChild can be used. 
    var child = holder.lastElementChild;
    while (child) {
        holder.removeChild(child);
        child = holder.lastElementChild;
    }

    counter = 0;

    library.forEach(element => {
        element.id = counter;
        counter++;
    })

    library.forEach(element => {
        return displayBook(element);
    });   
}
displayAllBooks(myLibrary);

const form = document.querySelector("#page-form");

form.addEventListener('submit', submitClicked);


function submitClicked(event){
    event.preventDefault();
    addBookToLibrary(form.title.value, form.author.value, form.pages.value, form.isRead.value, myLibrary.length-1);
    displayAllBooks(myLibrary);

    addListener();

    form.title.value = "";
    form.author.value = "";
    form.pages.value = "";
    form.isRead.value = true;
}

// const deleteButtonListener = document.querySelectorAll(".delete-button");
// const readButtonListener = document.querySelectorAll(".read-button");

// deleteButtonListener.forEach(button => button.addEventListener("click", deleteCard(button.dataset.index)));
// readButtonListener.forEach(button => button.addEventListener("click", toggleRead));


addListener();

function addListener(){
    const deleteButtonListener = document.querySelectorAll(".delete-button");
    deleteButtonListener.forEach(button => button.addEventListener("click", () => {
        deleteCard(button.dataset.index);
    }));
    const readButtonListener = document.querySelectorAll(".read-button");
    readButtonListener.forEach(button => button.addEventListener("click", () => {
        myLibrary[button.dataset.index].isRead = myLibrary[button.dataset.index].isRead ? false : true;
        displayAllBooks(myLibrary);
        console.log(myLibrary[button.dataset.index].isRead);
        addListener()
    }));

}

function deleteCard(index){
    if (index > -1) { 
        myLibrary.splice(index, 1);
        displayAllBooks(myLibrary);
        console.log("hello")
        //removeListener();
        addListener();
        console.log("hello")
    }     
}

function toggleRead(){
   
}

// var form = document.querySelector("#page-form");
// function handleForm(event) { event.preventDefault(); console.log("hi")} 
// form.addEventListener('submit', handleForm);
