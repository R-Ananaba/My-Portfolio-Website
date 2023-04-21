const lazyLoading = () => {

const lazyImgs = document.querySelectorAll('.lazy');

//to detect when any of our images enter the viewport/in view- we use the java intersection OBSERVER API. It takes 2 arguements i.e new IntersectionObserver(()=>{}, {}) - A call back function and object for seting up options i.e root, rootmargin, threshold with null, 0px, 0 as default values respectively. we will b using the default hence no point stating it in object option
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('loading');
            img.classList.add('loaded')
            observer.unobserve(img);
        }
    })
});

lazyImgs.forEach((img) => {
    observer.observe(img);
});

}

export default lazyLoading ;