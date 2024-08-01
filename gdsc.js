gsap.to(".nav", {
    backgroundColor: "#fff",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to(".main", {
    backgroundColor: "#fff",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%", end: "top -70%",
        scrub: "2"
    },

})

document.addEventListener('DOMContentLoaded', function () {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

var cursor = document.querySelector(".cursor");
var cursorback = document.querySelector(".cursor-back");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x +30 + "px"
    cursor.style.top = dets.y + "px"
})

var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
    cursorback.style.left = dets.x - 200 + "px"
    cursorback.style.top = dets.y - 200 + "px"
})
var a = document.querySelectorAll(".nav a");
a.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #000"
        cursor.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #4285f4"
        cursor.style.backgroundColor = "#4285f4"

    })
})

gsap.from(".about-section img,.about-content",
    {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".about-section",
            scroller: "body",
            // markers:"true",
            start: "top 70%", end: "top 60%",
            scrub: 1
        }

    }
)
gsap.from(".box-content",
    {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".box-content",
            scroller: "body",
            // markers:"true",
            start: "top 70%", end: "top 60%",
            scrub: 1
        }

    }
)
gsap.from("#colon-1", {
    y: -70, x: -70,
    scrollTrigger: {
        trigger: "#colon-1",
        scroller: "body",
        // markers: "true",
        start: "top 55% ", end: "top 45%",
        scrub: 4
    }

})
gsap.from("#colon-2", {
    y: 70, x: 70,
    scrollTrigger: {
        trigger: "#colon-1",
        scroller: "body",
        // markers: "true",
        start: "top 55% ", end: "top 45%",
        scrub: 4
    }

})