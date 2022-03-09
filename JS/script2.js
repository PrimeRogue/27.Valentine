let cards = document.querySelectorAll(".card");
let cardContents = document.querySelectorAll(".card .card-content");

function playAudio(url) {
    new Audio(url).play();
}

cards.forEach(item => item.addEventListener("mouseover", function() {
    cardContents.forEach(function(it) {
        if (item.dataset.num == it.dataset.num) it.style.transform = "translateY(-8rem)";
    })
}))
cards.forEach(item => item.addEventListener("mouseout", function() {
    cardContents.forEach(function(it) {
        if (item.dataset.num == it.dataset.num) it.style.transform = "translateY(8rem)";
    })
}))

let view = document.querySelectorAll(".view");
let modal = document.querySelectorAll(".modal");
view.forEach(item => item.addEventListener("click", function() {
    playAudio("sound/click.mp3");
    modal.forEach(function(it) {
        if (it.dataset.num == item.dataset.num) it.classList.toggle("active");
    })
}))