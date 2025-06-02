const {html} = require('common-tags');

function CertBadge(content,{url, image}) {
    return html`
    <div class='cert-image'>
        <a href="${url}">
            <img width="100" src="/assets/images/${image}" />
        </a>
        ${content}
    </div>
    `;
}

module.exports = CertBadge;