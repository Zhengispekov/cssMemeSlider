const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const buttons = carousel.parentElement.querySelector('.buttons');
    const pagButtons = buttons.querySelectorAll('.pag');
    let sectionIndex = 0;

    pagButtons.forEach((button, ind) => {
        button.addEventListener('click', () => {
            sectionIndex = ind;
            carousel.style.transform = `translate(-${sectionIndex * 25}%)`;

            
            pagButtons.forEach((btn) => btn.classList.remove('active'));

            
            button.classList.add('active');
        });
    });
});
