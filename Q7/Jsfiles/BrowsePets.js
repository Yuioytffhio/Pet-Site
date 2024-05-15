/*browse available pets slideshow*/
let imgIndex = 1;
displayImg(imgIndex);

function displayImg(n) {
    let images = document.getElementsByClassName("availablePets");
    if (n > images.length) {
        imgIndex = 1;
    }
    if (n < 1) {
        imgIndex = images.length;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    images[imgIndex - 1].style.display = "block"
}

function changeImg(n) {
    displayImg(imgIndex += n);
}

