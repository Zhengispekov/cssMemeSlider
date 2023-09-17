 const carousels = document.querySelectorAll('.carousel');
        const imageText = document.querySelector('.image-text'); 

        carousels.forEach((carousel) => {
            const buttons = carousel.parentElement.nextElementSibling.querySelector('.buttons');
            const pagButtons = buttons.querySelectorAll('.pag');
            let sectionIndex = 0;

            const imageTextArray = [
                "Уходи!",
                "Я не шучу!!",
                "Я очень зол!!!",
                "Эхх...не получилось"
            ];

            pagButtons.forEach((button, ind) => {
                button.addEventListener('click', () => {
                    sectionIndex = ind;
                    const translateValue = `translateX(-${sectionIndex * 25}%)`;
                    carousel.style.transform = translateValue;

                    pagButtons.forEach((btn) => btn.classList.remove('active'));
                    button.classList.add('active');

                    imageText.textContent = imageTextArray[ind];
                });
            });
        });