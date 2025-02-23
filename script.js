document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav-links a");
    let currentUrl = window.location.pathname.split("/").pop(); // Get only the filename

    links.forEach(link => {
        let linkPath = link.getAttribute("href").split("/").pop(); // Get only the filename
        if (linkPath && currentUrl === linkPath) {
            link.classList.add("active");
        }
    });
});
