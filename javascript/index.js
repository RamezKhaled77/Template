// ANCHOR - Global Variables
let navBar = document.querySelector("header");
let navLis = document.querySelectorAll("header .main-nav > li > a");
let otherLinksA = document.querySelector("#megaMenu");
let mySections =document.querySelectorAll("section")
let prevScrollPos = window.scrollY;
let scrollToTop = document.querySelector("#scroll-top");
let skillsSec = document.querySelector("#our-skills");
let progressSpans = document.querySelectorAll(".skills .skill .the-progress span");
let countDownDate = new Date("DEC 31, 2024 23:59:59").getTime()
let likeIcon = document.querySelector("#videos .holder .preview figcaption i");
let stats = document.querySelectorAll("#stats .container .row .box span:nth-child(2)");
let statsSec = document.querySelector("#stats");
let started = false;
let eventSec = document.querySelector("#events");
let myImg = document.querySelector("#events .container .row .image figure img");



window.addEventListener("scroll", () => {
    let currScrollPos = window.scrollY;
    if (currScrollPos > prevScrollPos) {
        navBar.style.transform = "translateY(-105%)"
    } else {
        navBar.style.transform = "translateY(0%)"
    }    
    prevScrollPos = currScrollPos;
});    

window.addEventListener("scroll", () => {
    this.scrollY >= 2000 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");
    for (let i = 0; i < mySections.length; i++) {
        if (window.scrollY >= mySections[i].offsetTop - 100) {
            if (window.scrollY >= (mySections[i].offsetTop + mySections[i].offsetHeight) ) {
                if (mySections[i].id === "features") {
                    if (window.scrollY > (mySections[i].offsetTop + mySections[i].offsetHeight)) {
                        navLis.forEach((a) => {
                            a.classList.remove("active");
                            otherLinksA.classList.add("active");
                        })    
                    }    
                } else {
                    continue; 
                }    
            } else {
                if (window.scrollY > (mySections[i].offsetTop + mySections[i].offsetHeight) || window.scrollY < mySections[i].offsetTop) {
                    document.querySelector(`#${mySections[i].id} .container .main-title`).classList.remove("active");
                } else {
                    document.querySelector(`#${mySections[i].id} .container .main-title`).classList.add("active");
                }    
                navLis.forEach((ele) => {
                    if (ele.getAttribute("href") === `#${mySections[i].id}`) {
                        navLis.forEach((a) => {
                            a.classList.remove("active")
                        })    
                        ele.classList.add("active")
                    }    
                })    
            }}}})    


scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });    
})    

addActiveClass(navLis);            

function addActiveClass(nodeList) {
    nodeList.forEach((a) => {
        a.addEventListener("click", (e) => {
            nodeList.forEach((a) => {
                a.classList.remove("active")
            })    
            a.classList.add("active"); 
        })    
    })    
}    


// SECTION - landing
let myText = document.querySelector(".auto-typed");
let textLoad = () => {
    setTimeout(() => {
        myText.textContent = "To Loop World"
    }, 0);    
}    
textLoad();

// SECTION -skills

window.addEventListener("scroll", () => {
    if (window.scrollY >= skillsSec.offsetTop - 300) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
})

// SECTION - Events
window.addEventListener("scroll", () => {
    if (window.scrollY >= eventSec.offsetTop - 200) {
        myImg.style.transform = "rotate(15deg)"
    }
})

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / ( 1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % ( 1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % ( 1000 * 60)) / (1000));
    
    document.querySelector("#events .counter .count.days span:nth-child(1)").innerHTML = days < 10 ? `0${days}`: days;
    document.querySelector("#events .counter .count.hours span:nth-child(1)").innerHTML = hours < 10 ? `0${hours}`: hours;
    document.querySelector("#events .counter .count.minutes span:nth-child(1)").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector("#events .counter .count.seconds span:nth-child(1)").innerHTML = seconds < 10 ? `0${seconds}`: seconds;
    if (dateDiff == 0) {
        clearInterval(counter);
    }
}, 1000);

// SECTION - Top Videos 
likeIcon.addEventListener("click", () => {
    if (likeIcon.classList.contains("fa-regular")) {
        likeIcon.classList.remove("fa-regular");
        likeIcon.classList.add("fa-solid")
    } else {
        likeIcon.classList.remove("fa-solid")
        likeIcon.classList.add("fa-regular");
    }
})

// SECTION - Stats
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count)
        }
    }, 1500 / goal);
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= statsSec.offsetTop - 400) {
        if (!started) {
            stats.forEach((ele) => startCount(ele))
        }
            started = true;
    }
})