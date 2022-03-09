let sendPass = document.querySelector(".send-password");
let inputBox = document.querySelector("input");
let arrPass = ["lienyeuvu", "vuyeulien"];

function playAudio(url) {
    new Audio(url).play();
}
inputBox.onkeyup = (e) => {
    console.log(e.target.value);
    playAudio("sound/click2.mp3");
    sendPass.addEventListener("click", function() {
        let userData = e.target.value;
        arrPass.forEach(function(item) {
            if (userData.toString().toLowerCase() === item) {
                document.querySelector(".form").style.display = "none";
                document.querySelector(".progress").style.display = "block";
                document.querySelector(".tuto").style.display = "block";
                const progress = document.querySelector('.progress-done');
                setTimeout(function() {
                    progress.setAttribute('data-done', "30");
                    progress.style.width = progress.getAttribute('data-done') + '%';
                    progress.style.opacity = 1;
                }, 500)

                setTimeout(function() {
                    document.querySelector(".tuto h2 span").textContent = "Nhấn vào 'mắt' để mở và đóng";
                    progress.setAttribute('data-done', "70");
                    progress.style.width = progress.getAttribute('data-done') + '%';
                    progress.style.opacity = 1;
                }, 1500)

                setTimeout(function() {
                    progress.setAttribute('data-done', "100");
                    progress.style.width = progress.getAttribute('data-done') + '%';
                    progress.style.opacity = 1;
                }, 2000)
                setTimeout(function() {
                    window.open("vulien.html", "_self");

                }, 3000)
            }
        })
    })
}