document.addEventListener("DOMContentLoaded", function() {
    const mainText = document.querySelector(".main-text");
    const secondaryText = document.querySelector(".secondary-text");
    let showingMain = true;

    setInterval(() => {
        if (showingMain) {
            mainText.classList.remove("active");
            secondaryText.classList.add("active");
        } else {
            secondaryText.classList.remove("active");
            mainText.classList.add("active");
        }
        showingMain = !showingMain;
    }, 5000); // switch every 5 seconds
});