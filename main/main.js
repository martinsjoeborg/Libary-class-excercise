import Book from "./books.js";
import Library from "./library.js";
import _Contacts from "./contacts.js";

let htmlbooks = document.getElementById('books');

let smartLib = new Library("SmartLib", "East Library Road 111.");

smartLib.addBook(new Book("Harry Potter", 2000, "J.K Rowling", "Available"));
smartLib.addBook(new Book("Lord of the rings", 4000, "J.R. Tolkien", "Available"));
smartLib.addBook(new Book("The famous five", 800, "Guid Byton", "Available"));
smartLib.addBook(new Book("It", 900, "Stephen King", "Available"));

smartLib.addContact(new _Contacts("Ben Readly", "+67 3345 54", "benthegem@smartlib.com"));
smartLib.addContact(new _Contacts("Jasmine Bookahol", "+67 3885 64", "jasmineflowah@smartlib.com"));
smartLib.addContact(new _Contacts("Ernest Hemmingway", "+66 666 666", "erniethebeast@smartlib.com"));
smartLib.addContact(new _Contacts("John Doe", "+00 000 000", "johndoe@smartlib.com"));




console.log(smartLib.printBooks());
