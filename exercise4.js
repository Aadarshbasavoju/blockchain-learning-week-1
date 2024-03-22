// JavaScript object representing a Book
const book = {
    title: "Book of Blockchain",
    author: "Satoshi ",
    pages: 2121,
    // Method to log a description of the book
    describe: function() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Number of Pages: ${this.pages}`);
    }
};

book.describe();
