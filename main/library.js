export default class Library {
    constructor(name, address){
        this.name = name;
        this.address = address;
        this.contacts = [];
        this.books = [];

    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    addContact(newContact) {
        this.contacts.push(newContact);
    }

    printContactInfo(){
        return this.contacts;
    }

    printNumberOfBooks(){
        return this.books.length + " is available to borrow. "
    }

    printBooks() {
        return this.books;
    }
}