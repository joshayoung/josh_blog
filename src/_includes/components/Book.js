const { html } = require('common-tags');

// TODO: Use short title:
function Book(title, hide, books) {
    if (hide)
    {
        return "";
    }

    let allBooks = `<h5>${ title }</h5>`;
    allBooks += "<ul>";
    if (hide) {
        return "";
    }

    for(var index in books) {
        var book = books[index];
        if (book.display && book.recommend)
        {
            allBooks += `<li><a href='${book.url}'>${book.title}</a></li>`;
        }
    }
    allBooks += "</ul>";

    return allBooks;
}

module.exports = Book;