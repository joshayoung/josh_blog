const { html } = require('common-tags');

function PortfolioItem(content, { title, visibility, repo, date, tech, image = null }) {

    if (repo != null) {
        var repoLink = html`
            <li><a class='repo' href='${repo}'>Repo (${visibility})</a></li>
        `;
    }
    return html`
        <div class='portfolio-item'>
            <div class='logo-wrap'>
            <img  class='logo'
            src="/assets/images/${image}" />
            </div>
            <div class='description-wrap'>
                ${content}
                <ul class='tech'>
                   <li><strong>Technologies:</strong> ${tech}</li>
                    ${repoLink}
                </ul>
            </div> 
        </div>
    `;
}

module.exports = PortfolioItem;