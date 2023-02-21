let iconeIndex = 0;
showIcone();

function showIcone() {
    let i;
    let slidesIcone = document.getElementsByClassName('slide-icone');
    for (i = 0; i < slidesIcone.length; i++) {
        slidesIcone[i].style.display = 'none';
    }
    iconeIndex++;
    if (iconeIndex > slidesIcone.length) {
        iconeIndex = 1
    }
    slidesIcone[iconeIndex-1].style.display = 'block';
    setTimeout(showIcone, 5000)
}