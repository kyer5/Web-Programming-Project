let cookeryketCurrentImage = 1;
const cookeryketTotalImages = 8;
const cookeryketImageWidth = 420;

document.querySelector('#cookeryket-prev-btn').addEventListener('click', function () {
    if (cookeryketCurrentImage > 1) {
        cookeryketCurrentImage--;
        document.querySelector('.project-image-container-cookeryket').style.transform = `translateX(-${cookeryketImageWidth * (cookeryketCurrentImage - 1)}px)`;
    }

    document.getElementById("cookeryket-current-number").textContent = cookeryketCurrentImage;
});

document.querySelector('#cookeryket-next-btn').addEventListener('click', function () {
    if (cookeryketCurrentImage < cookeryketTotalImages) {
        cookeryketCurrentImage++;
        document.querySelector('.project-image-container-cookeryket').style.transform = `translateX(-${cookeryketImageWidth * (cookeryketCurrentImage - 1)}px)`;
    }

    document.getElementById("cookeryket-current-number").textContent = cookeryketCurrentImage;
});