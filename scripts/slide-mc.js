let mcIndex = 0;
showMC();

function showMC() {
    let i;
    let slidesMC = document.getElementsByClassName('slide-mc');
    for (i = 0; i < slidesMC.length; i++) {
        slidesMC[i].style.display = 'none';
    }
    mcIndex++;
    if (mcIndex > slidesMC.length) {
        mcIndex = 1
    }
    slidesMC[mcIndex-1].style.display = 'block';
    setTimeout(showMC, 5000)
}