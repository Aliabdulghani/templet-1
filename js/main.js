let links = document.querySelector(".header .links ul");
document.querySelector(".icon").onclick = function () {
    if (links.style.display == 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
};