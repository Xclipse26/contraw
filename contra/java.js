  
//
const human = document.querySelector(".human");
let press;
let x = 0;
const stone = document.querySelector('.stone');
const h =document.querySelector(".con");
const d = document.querySelector("bomb");
const aerial = document.querySelector(".aerial");
const missile = document.querySelector(".missile");
let move = true;
let userpress;

var checkTouch = setInterval(() => {
    die();
    broke();
}, 0);


window.addEventListener("keydown", (event) => {
    press = String.fromCharCode(event.which).toLowerCase();
    console.log(press);

    if(press == "r"){
        location.reload();
    }

    userpress(press);
     console.log(human.getBoundingClientRect());
    // // collesion(human, stone);
    // console.log(stone.getBoundingClientRect());
})


userpress = (user) => {
    if(move){
    switch (user) {
        case " ":
            human.style.bottom = "95px";
            setTimeout(() => {
                human.style.bottom = "20px";
            }, 400)
            broke();
            break;
        case "d":
            if (human.style.left != "1150px") {
                x = x + 10;
                console.log(x + "go");
                human.style.left = x + "px";
            }
            broke();
            break;
        case "a":
            // window.alert(press);
            if (human.style.left > "0px") {
                x = x - 10;
                console.log(x + "back");
                human.style.left = x + "px";
            }
            broke();
            break;
    }
}
}

function broke() {
    let hx = human.getBoundingClientRect().x;
    let hy = human.getBoundingClientRect().y;
    let sx = stone.getBoundingClientRect().x;
    let sy = stone.getBoundingClientRect().y;

    let hw = human.getBoundingClientRect().width;
    let hh = human.getBoundingClientRect().height;
    let sw = stone.getBoundingClientRect().width;
    let sh = stone.getBoundingClientRect().height;
    // console.log(hx, hy, sx, sy, hw, hh, sw, sh);

    if ((hx < sx + sw && hx + hw > sx && hy < sy + sh && hy + hh > sy)) {
         //window.alert("game over");
        console.log("game over");
        stone.classList.remove("ab");
        h.src="boom.png"
        d.style.display ="none"
        move = false;
    }
}

function die() {
    let hx = human.getBoundingClientRect().x;
    let hy = human.getBoundingClientRect().y;
    let sx =aerial.getBoundingClientRect().x;
    let sy = aerial.getBoundingClientRect().y;

    let hw = human.getBoundingClientRect().width;
    let hh = human.getBoundingClientRect().height;
    let sw = aerial.getBoundingClientRect().width;
    let sh = aerial.getBoundingClientRect().height;
    // console.log(hx, hy, sx, sy, hw, hh, sw, sh);

    if ((hx < sx + sw && hx + hw > sx && hy < sy + sh && hy + hh > sy)) {
         //window.alert("game over");
        console.log("game over");
        missile.style.display = "none";
        h.src="boom.png"
        aerial.classList.remove("ad");
        move = false;
    }
}