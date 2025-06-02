const {html} = require('common-tags');

function CertBadge({url, image}) {
    return html`
    <a href="${url}">
        <img width="100" src="/assets/images/certs/Aplus_Logo_Certified_CE.png" />
    </a>
    `;
}

module.exports = CertBadge;