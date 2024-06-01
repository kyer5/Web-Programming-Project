let nowImage = 1;

document.querySelector('.prev').addEventListener('click', function () {
if (nowImage === 2) {
    document.querySelector('.project-image-container').style.transform = 'translateX(0)';
    nowImage -= 1;
} else if (nowImage === 3) {
    document.querySelector('.project-image-container').style.transform = 'translateX(-210px)';
    nowImage -= 1;
}
});

document.querySelector('.next').addEventListener('click', function () {
if (nowImage === 1) {
    document.querySelector('.project-image-container').style.transform = 'translateX(-210px)';
    nowImage += 1;
} else if (nowImage === 2) {
    document.querySelector('.project-image-container').style.transform = 'translateX(-420px)';
    nowImage += 1;
}
});