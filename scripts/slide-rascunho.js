let rascunhoIndex = 0;
showRascunho();

function showRascunho() {
    let i;
    let slidesRascunho = document.getElementsByClassName('slide-rascunho');
    for (i = 0; i < slidesRascunho.length; i++) {
        slidesRascunho[i].style.display = 'none';
    }
    rascunhoIndex++;
    if (rascunhoIndex > slidesRascunho.length) {
        rascunhoIndex = 1
    }
    slidesRascunho[rascunhoIndex-1].style.display = 'block';
    setTimeout(showRascunho, 5000)
}