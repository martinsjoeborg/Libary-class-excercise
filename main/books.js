export default class Book {
    constructor(title, pages, writer, status) {
        this.title = title;
        this.pages = pages;
        this.writer = writer;
        this.status = status;

    }

    showInfo() {
        let bookInfo = this.title + " is a book writen by " + this.writer + " and is " + this.pages + " pages long. " + this.status + ".";
        return bookInfo;
    }

    borrowBook() {
        let brwBook = "You have borrowed " + this.title + ". ";
        return brwBook;
    }
    returnBook() {
        let rtnBook = "You have returned " + this.title + ". ";
        return rtnBook;
    }
}

