const ulEls = document.querySelectorAll(".carousel-cards li");
const learnMore = document.querySelector(".learn-more");
const modal = document.querySelector(".container");
const exit = document.querySelector(".exit");

let i = 0;

setInterval(autoShow, 5000);

let img1;

let modalEls1 = {};
let modalEls2 = {};

function show(increase) {
    i += increase;
    i = Math.min(Math.max(i, 0), ulEls.length - 1);

    ulEls[i].scrollIntoView({ behavior: "smooth" });

    if (i === 0) {
        img1 = true;
        modalEls1 = {
            titulo: "Scooter Elétrica Voltz EV1",
            descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: document.querySelectorAll(".carousel-cards img")[0].src,
        }
    } else {
        img1 = false;
        modalEls2 = {
            titulo: "Honda CB 500X",
            descrição: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
            img: document.querySelectorAll(".carousel-cards img")[1].src,
        }
    }

    console.log(modalEls1);
    console.log(modalEls2)
}

let call;
function autoShow() {
    if (call) {
        show(-1);
        call = false;
    } else {
        show(1);
        call = true;
    }
}

learnMore.addEventListener('click', () => {
    modal.style.display = 'flex';

    if (img1) {
        modal.childNodes[1].childNodes[3].innerHTML = modalEls1.titulo;
        modal.childNodes[1].childNodes[5].innerHTML = modalEls1.descrição;
        modal.childNodes[1].childNodes[7].src = modalEls1.img;
    } else {
        modal.childNodes[1].childNodes[3].innerHTML = modalEls2.titulo;
        modal.childNodes[1].childNodes[5].innerHTML = modalEls2.descrição;
        modal.childNodes[1].childNodes[7].src = modalEls2.img;
    }

});

exit.addEventListener('click', () => {
    modal.style.display = 'none';
})

