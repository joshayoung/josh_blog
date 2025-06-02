const {html} = require('common-tags');

function Thought(title, url, description, date) {
    const fdate = new Date(date);
   const formattedDate = fdate.toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'long',
     day: 'numeric',
   });
    return html`
    <div class="thought">
        <h3>
            <a href="${url}">${title}</a>
        </h3>
        <p>${description}</p>
        <div class="date">${formattedDate}</div>
    </div>
    `;
}

module.exports = Thought;