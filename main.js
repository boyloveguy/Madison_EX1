
let visibleItemsAll = 2
let visibleItemsDESIGN = 2
let visibleItemsDEVELOPMENT = 2
let visibleItemsBRANDING = 2
let visibleItemsPRODUCTS = 2

let currentItemALL = 0
let currentItemDESIGN = 0
let currentItemDEVELOPMENT = 0
let currentItemBRANDING = 0
let currentItemPRODUCTS = 0



const dataCard = fetch("./json/dataCard.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data
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
const changeTab = (nameTab) => {
    fetch("./json/dataCard.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            switch (nameTab) {
                case 'ALL':
                    handleBanner(data, "ALL", currentItemALL, visibleItemsAll)
                    break;
                case 'DESIGN':
                    handleBanner(data, 'DESIGN', currentItemDESIGN, visibleItemsDESIGN)
                    break;
                case 'DEVELOPMENT':
                    handleBanner(data, 'DEVELOPMENT', currentItemDEVELOPMENT, visibleItemsDEVELOPMENT)
                    break;
                case 'BRANDING':
                    handleBanner(data, 'BRANDING', currentItemBRANDING, visibleItemsBRANDING)
                    break;
                case 'PRODUCTS':
                    handleBanner(data, 'PRODUCTS', currentItemPRODUCTS, visibleItemsPRODUCTS)
                    break;
                default:
            }
        });
}


const handleBanner = (data, type, currentItem, visibleItems) => {
    $(document).ready(function () {
        $(".body-projects-card-container")?.empty()
        const loadMoreBtn = $(".btn-load_more")
        loadMoreBtn.attr("onclick", `handleLoadMore('${type}', '${currentItem}', '${visibleItems}')`)
    })

    let count = 0
    let a = []

    for (let i = currentItem; i < data.length; i++) {
        if (data[i].type === type || type === "ALL") {
            a.push(data[i])
            showBanner(data[i])
            console.log(count)
            count++
            if(count>visibleItems-1){
                break
            }
                
        }
    }
    if (visibleItems >= data.length) {
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
                <img style="${item.position}" src="${item.image}" alt="">
            </div>
        </div>`)
    })
}

const handleLoadMore = (type, currentItem, visible) => {
    changeTab(type)
    visibleItemsAll += 2
    visibleItemsDESIGN += 2
    visibleItemsDEVELOPMENT += 2
    visibleItemsBRANDING += 2
    visibleItemsPRODUCTS += 2
}


let currentSlide = 0

const handleBtnSlideLeft = () => {
    return currentSlide - 550
}


function openSidebar() {
    document.getElementById('sidebar').style.width = '250px';
}

// Function to close the sidebar
function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}


// Slide
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
    console.log(card.offsetWidth)
    // slides.style.transform = `translateX(${-100 * (slideIndexSay - 1)}%)`;
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
            console.log(currentHeader)
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


changeTab("ALL")
handleChangeActiveBtn()

setInterval(nextSlideHeader, 5000);
setInterval(nextSlide, 3000);
let count = 0
setInterval(()=>{
    count++
    currentSlideOur(count)
    if(count>3){
        count = 0
    }
}, 3000);