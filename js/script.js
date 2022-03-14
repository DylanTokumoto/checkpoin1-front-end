const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let id1 = 0;

function carrossel() {

    id1++;

    if (id1 > img.length - 1) {
        id1 = 0;
    }

    imgs.style.transform = `translateX(${ -id1 * 500}px)`
}

setInterval(carrossel, 1800);