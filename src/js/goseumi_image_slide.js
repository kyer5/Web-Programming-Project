let goseumiCurrentImage = 1;
const goseumiTotalImages = 3;
const goseumiImageWidth = 210;

document.querySelector('#goseumi-prev-btn').addEventListener('click', function () {
    if (goseumiCurrentImage > 1) {
        goseumiCurrentImage--;
        document.querySelector('.project-image-container-goseumi').style.transform = `translateX(-${goseumiImageWidth * (goseumiCurrentImage - 1)}px)`;
    }

    document.getElementById("goseumi-current-number").textContent = goseumiCurrentImage;
});

document.querySelector('#goseumi-next-btn').addEventListener('click', function () {
    if (goseumiCurrentImage < goseumiTotalImages) {
        goseumiCurrentImage++;
        document.querySelector('.project-image-container-goseumi').style.transform = `translateX(-${goseumiImageWidth * (goseumiCurrentImage - 1)}px)`;
    }

    document.getElementById("goseumi-current-number").textContent = goseumiCurrentImage;
});