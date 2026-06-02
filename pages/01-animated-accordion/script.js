const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        document.querySelectorAll('.accordion-body').forEach(item => {
            if (item !== body) item.classList.remove('active');
        });
        body.classList.toggle('active');
    });
});