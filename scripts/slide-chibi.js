let chibiIndex = 0;
showChibi();

function showChibi(n) {
    let i;
    let slidesChibi = document.getElementsByClassName('slide-chibi');
    for (i = 0; i < slidesChibi.length; i++) {
        slidesChibi[i].style.display = 'none';
    }
    chibiIndex++;
    if (chibiIndex > slidesChibi.length) {
        chibiIndex = 1
    }
    slidesChibi[chibiIndex-1].style.display = 'block';
    setTimeout(showChibi, 5000)
}