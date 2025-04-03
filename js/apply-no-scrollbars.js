document.addEventListener('DOMContentLoaded', function () {
    // Get all iframes
    const iframes = document.querySelectorAll('iframe');

    // Wait for iframes to load
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function () {
            try {
                // Create a link element
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '../css/no-scrollbars.css';

                // Append to the iframe's document head
                iframe.contentDocument.head.appendChild(link);

                console.log('No-scrollbars CSS added to:', iframe.src);
            } catch (e) {
                console.error('Failed to add CSS to iframe:', e);
            }
        });
    });
}); 