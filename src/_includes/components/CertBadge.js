const { html } = require('common-tags');

function CertBadge(content, { url, image = null }) {
    if (image != null) {
        var imageStuff = html`
        <div class='image-wrap'>
            <img 
            src="/assets/images/${image}" />
            </div>
        `;
    }

    return html`
        <div class='cert-image'>
        ${imageStuff}
            <div class='image-description'>
                ${content}
            </div> 
        </div>
        <a class='about-cert' href="${url}">About Certification</a>
    `;
}

module.exports = CertBadge;