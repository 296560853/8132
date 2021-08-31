var h = document.documentElement.scrollTop || document.body.scrollTop;
var bar = document.querySelectorAll(".top-nav");
var p = document.querySelectorAll("p.left");


// window.onscroll = function () {
//
//     if (window.pageYOffset >= 30) {
//         bar[0].style.backgroundColor = "grey"
//         p[0].style.color = "black";
//     } else if (window.pageYOffset === 0) {
//         bar[0].style.backgroundColor = "transparent"
//         p[0].style.color = "white";
//     }
// }


// var a = document.querySelectorAll(".tab ul li a");
// for (let i = 0; i < a.length; i++) {
//     a[i].onclick = function () {
//         for (let j = 0; j < a.length; j++) {
//             a[j].removeAttribute("class", "active");
//         }
//         a[i].setAttribute("class", "active");
//     }
// }


//
const box = document.querySelectorAll('.intro_event .event');
window.addEventListener('scroll', function () {
    box.forEach(function (b) {
        var winHigh = window.innerHeight;
        var boxHigh = b.getBoundingClientRect().top;
        console.log("boxHigh:" + boxHigh);
        console.log("winHigh:" + winHigh);
        if (boxHigh < winHigh) {
            b.classList.add('show');
            b.classList.remove('unshow');

        } else {
            b.classList.remove('show');
            b.classList.add('unshow');
        }
    })
})

var explore_s_box = document.querySelectorAll(".gallery_small .gallery img");
var explore_b_box = document.querySelector(".gallery_big .gallery img");
window.addEventListener("load", function () {

        let timeout = 3;
        var i = 0;
    setInterval(function () {
        timeout--;
        if (timeout === 0) {
            explore_b_box.setAttribute("src", explore_s_box[i].getAttribute("src"));
            i++;
            timeout = 3;
            if (i > 2) {
                i = 0;
            }
        }
    }, 1000)

})
explore_s_box.forEach(function (b) {
    b.addEventListener("click", function () {
        explore_b_box.setAttribute("src", b.getAttribute("src"));
    })


})


const bottom_photo=document.querySelectorAll(".body_bottom_photo");
bottom_photo.forEach(function (item) {
    item.addEventListener('click',function () {
        bottom_photo.forEach(function (item) {
            item.classList.remove('start-up');
        })
        item.classList.add('start-up');
    })
})





