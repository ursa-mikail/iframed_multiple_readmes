document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('content-select');
    const iframe = document.getElementById('content-iframe');

    function loadContent(filePath) {
        iframe.src = filePath;
    }

    if (selectElement) {
        selectElement.addEventListener('change', (event) => {
            const filePath = event.target.value;
            loadContent(filePath);
        });

        // Load default content
        loadContent(selectElement.value);
    }
});

