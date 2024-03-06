let visibleItems = 2

let currentItem = 0

let currentSlide = 0

// Animation Scroll
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeAnimation");
        } else {
            reveals[i].classList.remove("activeAnimation");
        }
    }
}

window.addEventListener("scroll", reveal);


//Load Page
$(document).ready(function () {
    const getLoadPage = document.querySelector(".preloader")
    $(window).on('load',function(){
        setTimeout(() => {
            // getLoadPage.remove();
            getLoadPage.classList.add("inactive");
        }, 2000)
    })

})

// Handle Go To Top Btn 
let topBtnBeat = document.querySelector(".go-top-btn-beat");
let topBtnEcho = document.querySelector(".go-top-btn-echo");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        topBtnBeat.style.display = "block";
        topBtnEcho.style.display = "block";
    } else {
        topBtnBeat.style.display = "none";
        topBtnEcho.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Function to open the sidebar
function openSidebar() {
    document.getElementById('sidebar').style.width = '250px';
}

// Function to close the sidebar
function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}


// handle to close the sidebar when click out side
window.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_toggler') {
        sidebar.style.width = '0'
    }
});


// Handle Play Video
const handlePlayVideo = () => {
    $(document).ready(function () {
        $(".body-advantage-video-banner").addClass("inactive");
        $(".body-advantage-video-play").addClass("active");
        $(".body-advantage-video-play").append(`<iframe height="400px" width="95%" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe>`)
    });
}

// Handle Click Menu
const handleChangeActiveBtn = () => {
    const btn = document.querySelectorAll(".body-projects-menu-side button")
    btn.forEach(element => {
        element.addEventListener("click", function () {
            document.querySelector(".body-projects-btn-active")?.classList.remove("body-projects-btn-active")
            element.classList.add("body-projects-btn-active")
        });
    });
}

// PROTFOLIO
const changeTab = (nameTab, type) => {
    fetch("./json/dataCard.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            switch (nameTab) {
                case 'ALL':
                    handleBanner(data, "ALL")
                    break;
                case 'DESIGN':
                    handleBanner(data, 'DESIGN')
                    break;
                case 'DEVELOPMENT':
                    handleBanner(data, 'DEVELOPMENT')
                    break;
                case 'BRANDING':
                    handleBanner(data, 'BRANDING')
                    break;
                case 'PRODUCTS':
                    handleBanner(data, 'PRODUCTS')
                    break;
                default:
            }
        });
    if (type == "Tab") {
        visibleItems = 2
        document.querySelector(".btn-load_more").classList.remove("inactive");
    }
}


const handleBanner = (data, type) => {
    $(document).ready(function () {
        $(".body-projects-card-container")?.empty()
        const loadMoreBtn = $(".btn-load_more")
        loadMoreBtn.attr("onclick", `handleLoadMore('${type}')`)
    })

    let count = 0

    const result = data.filter((item) => type == 'ALL' ? true : item.type == type)

    for (let i = currentItem; i < data.length; i++) {
        if (data[i].type === type || type === "ALL") {
            showBanner(data[i])
            count++
            if (count > visibleItems - 1) {
                break
            }
        }
    }
    if (visibleItems >= result.length) {
        $(".btn-load_more").addClass("inactive");
    }
}

const showBanner = (item) => {
    $(document).ready(function () {
        const cardContainer = $(".body-projects-card-container")

        cardContainer.append(`
        <div class="body-projects-card-bg flex-box" style="background-color: ${item.background_color}; color: ${item.color};">
            <div class="body-projects-card-content">
                <p>${item.type}</p>
                <h2>${item.title}</h2>
            </div>
            <div>
                <img style="${item.position}" src="${item.image}" alt="image">
            </div>
        </div>`)
    })
}

const handleLoadMore = (type) => {
    changeTab(type, 'LoadMore')
    visibleItems += 2
}

// Slide Our
let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelector('.body-features-cards');
    const slidesCount = document.querySelectorAll('.body-features-card').length;
    const card = document.querySelector(".body-features-card")

    if (n > slidesCount) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slidesCount;
    }

    slides.style.transform = `translateX(${(-card.offsetWidth - 30) * (slideIndex - 1)}px)`;
}

function currentSlideOur(n) {
    showSlides(slideIndex = n);
    const btn = document.querySelectorAll(".body-features-slide")

    document.querySelector(".active-highlight")?.classList.remove("active-highlight")
    btn[n - 1]?.classList.add("active-highlight")

    btn.forEach(element => {
        element.addEventListener("click", function () {
            document.querySelector(".active-highlight")?.classList.remove("active-highlight")
            element.classList.add("active-highlight")
        });
    });

}


// Initial slide show
showSlides(slideIndex);



// Slide Say
let slideIndexSay = 1;

function showSlidesSay(n) {
    const slides = document.querySelector('.body-say-card-slide');
    const slidesCount = document.querySelectorAll('.body-say-card').length;
    const card = document.querySelector(".body-say-card")

    if (n > slidesCount) {
        slideIndexSay = 1;
    }

    if (n < 1) {
        slideIndexSay = slidesCount;
    }
    slides.style.transform = `translateX(${(-card.offsetWidth - 30) * (slideIndexSay - 1)}px)`;
}

function prevSlide() {
    showSlidesSay(slideIndexSay -= 1);
}

function nextSlide() {
    showSlidesSay(slideIndexSay += 1);
}


// Slide Header
let currentHeader = 1;
const handleChangeHeader = (n) => {
    const countBanner = document.querySelectorAll(".header-content-container").length
    const banners = document.querySelectorAll(".header-content-container")
    if (n > countBanner) {
        currentHeader = 1;
    }

    if (n < 1) {
        currentHeader = countBanner;
    }

    banners.forEach(element => {
        if (banners[currentHeader - 1] == element) {
            document.querySelector(".header-active")?.classList.remove("header-active")
            element.classList.add("header-active")
        }
    });
    document.querySelector(".body-advantage-tab-page").innerHTML = `${currentHeader + '/' + countBanner}`
}

function prevSlideHeader() {
    handleChangeHeader(currentHeader -= 1);
}

function nextSlideHeader() {
    handleChangeHeader(currentHeader += 1);
}

const countBanner = document.querySelectorAll(".header-content-container").length
document.querySelector(".body-advantage-tab-page").innerHTML = `${currentHeader + '/' + countBanner}`


// FULL Width Mobile
const widthMobile = window.matchMedia("(max-width: 1200px)")
if (widthMobile.matches) {
    $(".dot-container").append(`
    <div onclick="currentSlideOur(5)" class="body-features-slide last-dot"></div>
    `)
}

changeTab("ALL")
handleChangeActiveBtn()

// Auto Slide
setTimeout(() => {
    setInterval(nextSlideHeader, 5000);
}, 2000)
setInterval(nextSlide, 3000);

let count = 0
setInterval(() => {
    count++
    currentSlideOur(count)
    if (widthMobile.matches) {
        if (count > 4) {
            count = 0
        }
    } else {
        if (count > 3) {
            count = 0
        }
    }
}, 3000);
