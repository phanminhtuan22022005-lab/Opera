alert("script.js đã chạy");
// =========================
// Danh sách lời chúc
// =========================

const wishes = {

    "1205": {
        name: "Tuấn",
        message: "Chúc cậu luôn vui vẻ, mạnh khỏe và đạt được mọi điều mình mong muốn. Cảm ơn vì đã đồng hành cùng 18DL ❤️"
    },

    "0817": {
        name: "Lan",
        message: "Chúc cậu luôn hạnh phúc, gặp nhiều may mắn và có thật nhiều kỷ niệm đẹp cùng 18DL ✨"
    },

    "0302": {
        name: "Minh",
        message: "Mong rằng mọi điều tốt đẹp nhất sẽ luôn đến với cậu. Cảm ơn vì đã là một phần của 18DL 🌌"
    }

};

// =========================

let currentWish = null;

// =========================

function checkCode(){

    const code = document.getElementById("code").value.trim();

    const error = document.getElementById("error");

    if(wishes[code]){

        currentWish = wishes[code];

        document.getElementById("loginBox").classList.add("hidden");

        document.getElementById("giftScene").classList.remove("hidden");

    }

    else{

        error.innerHTML = "❌ Mã không đúng.";

        error.style.color = "#ffb3b3";

    }

}

// =========================

function openGift(){

    const lid = document.querySelector(".lid");

    const gift = document.querySelector(".gift");

    // rung

    gift.animate([

        {transform:"rotate(-4deg)"},

        {transform:"rotate(4deg)"},

        {transform:"rotate(-4deg)"},

        {transform:"rotate(4deg)"},

        {transform:"rotate(0deg)"}

    ],{

        duration:600

    });

    setTimeout(()=>{

        lid.style.transform="rotate(-35deg) translateY(-20px)";

    },600);

    setTimeout(()=>{

        document.getElementById("giftScene").classList.add("hidden");

        document.getElementById("letter").classList.remove("hidden");

        document.getElementById("friendName").innerHTML =
        "🎉 Xin chào " + currentWish.name + "!";

        typeWriter(currentWish.message);

    },1500);

}

// =========================

function typeWriter(text){

    let i = 0;

    const target = document.getElementById("wishText");

    target.innerHTML = "";

    const timer = setInterval(()=>{

        target.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

        }

    },35);

}
