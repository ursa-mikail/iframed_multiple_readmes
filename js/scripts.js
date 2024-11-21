document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('content-select');
    const contentContainer = document.getElementById('content-container');

    async function loadContent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const markdown = await response.text();
            const htmlContent = marked.parse(markdown);
            contentContainer.innerHTML = htmlContent;
        } catch (error) {
            console.error('Failed to fetch the content:', error);
            contentContainer.innerHTML = '<p>Failed to load content. Please try again later.</p>';
        }
    }

    if (selectElement) {
        selectElement.addEventListener('change', (event) => {
            const url = event.target.value;
            loadContent(url);
        });

        // Load default content
        loadContent(selectElement.value);
    }
});
