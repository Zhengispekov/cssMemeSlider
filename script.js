const memes = querySelectorAll(".memes");
var counter = 0; 

memes.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`
});


const memesSlide = () => {
    memes.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100%})`
        }
    )
}