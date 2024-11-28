document.querySelectorAll('.details h3').forEach(header => {
    header.addEventListener('click', () => {

        header.classList.toggle('active');

        const content = header.nextElementSibling;
        
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});