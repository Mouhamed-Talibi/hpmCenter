document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader-container");
    const content = document.querySelector(".content");

    // Simulate loading (you can remove setTimeout in production)
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.8s ease";
            setTimeout(() => {
                loader.style.display = "none";
                content.classList.add("show");
            }, 800);
        }, 500);
    });
});