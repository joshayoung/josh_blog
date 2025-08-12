const { html } = require('common-tags');

function PortfolioItem(content, { title, visibility, repo, date, tech, image = null }) {
    return html`
        <div class='portfolio-item'>
            <div class='logo-wrap'>
            <img  class='logo'
            src="/assets/images/${image}" />
            </div>
            <div class='description-wrap'>
                ${content}
                <div class='tech'>
                    <strong>Technologies:</strong> ${tech}
                    <div class='date'>(${date})</div>
                    <a class='repo' href='${repo}'>Link to Repo (${visibility})</a>
                </div>
            </div> 
        </div>
    `;
}

module.exports = PortfolioItem;