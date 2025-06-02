const {html} = require('common-tags');

function Thought(title, url, description, date) {
    return html`
    <div class="">
        <h3>
            <a href="/${url}">${title}</a>
        </h3>
        <p>${description}</p>
        <div class="css-rnnx2x">${date}</div>
    </div>
    `;
}

module.exports = Thought;