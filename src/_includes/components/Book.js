const { html } = require('common-tags');

function Book(title, author, url, display, recommend) {
    if (display && recommend) {
        return html`
            <li>
                <a href='${url}'>${title} by ${author}</a>
            </li>
        `;
    }

    return html`
        <li class="display:none;"></li>
    `;
}

module.exports = Book;