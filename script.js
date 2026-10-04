// Surprise Button

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function () {

    surpriseMessage.innerHTML =
        "🌸 You are not just a teacher, you are an inspiration! 💖✨";

    createHearts();
});


// Thank You Button

const thankBtn = document.getElementById("thankBtn");
const thankMessage = document.getElementById("thankMessage");

thankBtn.addEventListener("click", function () {

    thankMessage.innerHTML =
        "💐 A special thank you from the heart! You are truly amazing! ❤️";

    createHearts();
});


// Create Floating Hearts

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["❤️", "💖", "🌸", "✨", "💐"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.zIndex = "999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const animation = heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-100vh) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 3000 + Math.random() * 2000,
                easing: "ease-out"
            }
        );

        animation.onfinish = function () {
            heart.remove();
        };
    }
}


// Welcome Message

window.addEventListener("load", function () {

    setTimeout(function () {

        console.log(
            "🌸 Welcome to the Happy Teachers' Day Website! 🌸"
        );

    }, 500);

});