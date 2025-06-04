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
            var title = book.title;
            if (book.short_title != "" && book.short_title != null)
            {
                title = book.short_title;
            }
            allBooks += `<li><a href='${book.url}'>${title} by ${book.author}</a></li>`;
        }
    }
    allBooks += "</ul>";

    return allBooks;
}

module.exports = Book;