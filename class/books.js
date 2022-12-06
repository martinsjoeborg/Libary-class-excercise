class Books {
    constructor(title, pages, writer, available) {
        this.title = title;
        this.pages = pages;
        this.writer = writer;
        this.available = available;

    }

    showInfo() {
        let bookInfo = this.title + " is a book writen by " + this.writer + " and is " + this.pages + " pages long. " + this.available + ".";
        return bookInfo;
    }

    borrowBook() {
        return "You have borrowed " + this.title + ".";
    }
    returnBook() {
        return "You have returned " + this.title + ".";
    }
}

