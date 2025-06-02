const { html } = require('common-tags');

function CertBadge(content, { url, image = null }) {
    if (image != null)
    {
        var imageStuff = html`
    <div class='one'>
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
        <div>
            <a href="${url}">About Certification</a>
        </div>
    `;
}

module.exports = CertBadge;