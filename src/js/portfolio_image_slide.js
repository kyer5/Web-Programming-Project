let portfolioCurrentImage = 1;
const portfolioTotalImages = 9;
const portfolioImageWidth = 480;

document.querySelector('#portfolio-prev-btn').addEventListener('click', function () {
    if (portfolioCurrentImage > 1) {
        portfolioCurrentImage--;
        document.querySelector('.project-image-container-portfolio').style.transform = `translateX(-${portfolioImageWidth * (portfolioCurrentImage - 1)}px)`;
    }

    document.getElementById("portfolio-current-number").textContent = portfolioCurrentImage;
});

document.querySelector('#portfolio-next-btn').addEventListener('click', function () {
    if (portfolioCurrentImage < portfolioTotalImages) {
        portfolioCurrentImage++;
        document.querySelector('.project-image-container-portfolio').style.transform = `translateX(-${portfolioImageWidth * (portfolioCurrentImage - 1)}px)`;
    }

    document.getElementById("portfolio-current-number").textContent = portfolioCurrentImage;
});
