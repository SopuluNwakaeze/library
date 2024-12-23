const myLibrary = [];

function Book(title,author,pages,isRead){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead){
    const book = new Book(title,author,pages,isRead);
    myLibrary.push(book);
}

addBookToLibrary("The Bible", "Jesus", "1000", "not read yet");
addBookToLibrary("The Bible", "Jesus", "1000", "not read yet");
addBookToLibrary("The Bible", "Jesus", "1000", "not read yet");
addBookToLibrary("The Bible", "Jesus", "1000", "not read yet");


function displayBook(book){
    const libraryHolder = document.querySelector(".library-holder");
    console.log(libraryHolder);
    const libraryItem = document.createElement("div");
    libraryItem.setAttribute("class","library-item");

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
    pReadTag.textContent = "Read?: ";
    const pReadBook = document.createElement("p");
    pReadBook.textContent = book.isRead;
    span4.appendChild(pReadTag);
    span4.appendChild(pReadBook);

    itemContainer.appendChild(span1);
    itemContainer.appendChild(span2);
    itemContainer.appendChild(span3);
    itemContainer.appendChild(span4);

    libraryItem.appendChild(itemContainer);
    libraryHolder.appendChild(libraryItem);
    console.log(libraryHolder);
}

function displayAllBooks(library){
    library.forEach(element => {
        console.log(displayBook(element))
        return displayBook(element);
    });
    
}
displayBook(myLibrary[0]);

displayAllBooks(myLibrary);

