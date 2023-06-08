const lazyImages = document.querySelectorAll(".lazy");
lazyImages.forEach((img) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                img.src = img.dataset.src;
                img.classList.add("loaded");
                img.classList.remove("blur");
                observer.unobserve(img);
            }
        });
    });
    observer.observe(img);
});