let ciIndex = 0;
showCI();

function showCI() {
    let i;
    let slidesCI = document.getElementsByClassName('slide-ci');
    for (i = 0; i < slidesCI.length; i++) {
        slidesCI[i].style.display = 'none';
    }
    ciIndex++;
    if (ciIndex > slidesCI.length) {
        ciIndex = 1
    }
    slidesCI[ciIndex-1].style.display = 'block';
    setTimeout(showCI, 5000)
}