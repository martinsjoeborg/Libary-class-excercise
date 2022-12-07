import Book from "./books.js";
import Library from "./library.js";
import _Contacts from "./contacts.js";

//Connect html tags to js
let h1 = document.getElementById('h1');
let h3 = document.getElementById('h3'); 
let btn = document.getElementById('btn');
let conBtn = document.getElementById('conBtn');
let bookList = document.getElementById('bookList');
let contactList = document.getElementById('contactList');



//Create new library from "Library" class, smartlib is variable name, "SmartLibrary" is name parameter and "East Lib.." is address parameter.
let smartLib = new Library("SmartLibrary", "East Library Road 111.");

//Using the "addBook" method from the "Library" class in our new library "smartlib" to add new book with 4 parameters.
smartLib.addBook(new Book("Harry Potter", 2000, "J.K Rowling", "Available"));
smartLib.addBook(new Book("Lord of the rings", 4000, "J.R. Tolkien", "Available"));
smartLib.addBook(new Book("The famous five", 800, "Guid Byton", "Available"));
smartLib.addBook(new Book("It", 900, "Stephen King", "Available"));

//Using the "addContact" method from the "Library" class in our new library "smartlib" to add new book with 3 parameters. 
smartLib.addContact(new _Contacts("Ben Readly", "+67 3345 54", "benthegem@smartlib.com"));
smartLib.addContact(new _Contacts("Jasmine Bookahol", "+67 3885 64", "jasmineflowah@smartlib.com"));
smartLib.addContact(new _Contacts("Ernest Hemmingway", "+66 666 666", "erniethebeast@smartlib.com"));
smartLib.addContact(new _Contacts("John Doe", "+00 000 000", "johndoe@smartlib.com"));



//h1.insertAdjacentHTML('afterbegin', "<h1>" + smartLib.name + "</h1>");
function seeBooks(){
    smartLib.books.map(yep =>{
        bookList.insertAdjacentHTML('afterbegin', "<li>" + yep.showName() + "</li>");
    });
    
    bookList.hidden = false;
    
}

function seeContacts(){
    smartLib.contacts.map(yup =>{
        contactList.insertAdjacentHTML('afterbegin', "<li>" + yup.showContact() + "</li>");
    });
    

    contactList.hidden = false;

}

h1.innerHTML = smartLib.name;
h3.innerHTML = smartLib.address;

btn.addEventListener('click', seeBooks);
conBtn.addEventListener('click', seeContacts);

let i = "Hello";


// bookList.insertAdjacentHTML('afterbegin', "<li>" + i + "</li>");

