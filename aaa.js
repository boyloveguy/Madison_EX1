        // currentItem += 2
        // if (visibleItems >= data.length) {
        //     $(".btn-load_more").addClass("inactive");
        // }
        // data.map((item) => {
        //     if (item.type === type || type === "ALL") {
        //         $(".body-projects-card-container").append(`
        //                         <div class="body-projects-card-bg flex-box" style="background-color: ${item.background_color}; color: ${item.color};">
        //                         <div class="body-projects-card-content">
        //                             <p>${item.type}</p>
        //                             <h2>${item.title}</h2>
        //                         </div>
        //                         <div>
        //                             <img style="${item.position}" src="${item.image}" alt="">
        //                         </div>
        //                     </div>
        //                     `)
        //     }
        // })

        

    // fetch("./json/dataCard.json")
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         visibleItems += 2;
    //         for (let i = currentItem; i < visibleItems; i++) {
    //             $(document).ready(function () {
    //                 $(".body-projects-card-container").append(`
    //                     <div class="body-projects-card-bg flex-box" style="background-color: ${data[i].background_color}; color: ${data[i].color};">
    //                     <div class="body-projects-card-content">
    //                         <p>${data[i].type}</p>
    //                         <h2>${data[i].title}</h2>
    //                     </div>
    //                     <div>
    //                         <img style="${data[i].position}" src="${data[i].image}" alt="">
    //                     </div>
    //                 </div>
    //                 `)
    //             });
    //         }
    //         currentItem += 2
    //         if (visibleItems >= data.length) {
    //             $(".btn-load_more").addClass("inactive");
    //         }
    //     });


    // Handle Tabs
const handleTabs = (data, type) => {
    $(document).ready(function () {
        $(".body-projects-card-container")?.empty()
        let a = 0
        switch (type) {
            case 'ALL':
                a = visibleItemsAll += 2;
                break;
            case 'DESIGN':
                a = visibleItemsDESIGN += 2;
                break;
            case 'DEVELOPMENT':
                a = visibleItemsDEVELOPMENT += 2;
                break;
            case 'BRANDING':
                visibleItemsBRANDING += 2;
                break;
            case 'PRODUCTS':
                visibleItemsPRODUCTS += 2;
                break;
            default:
        }
        console.log(data, a)
        for (let i = currentItem; i < a; i++) {
            if (data[i].type === type || type === "ALL") {
                console.log(i, a)
                $(".body-projects-card-container").append(`
                    <div class="body-projects-card-bg flex-box" style="background-color: ${data[i].background_color}; color: ${data[i].color};">
                        <div class="body-projects-card-content">
                            <p>${data[i].type}</p>
                            <h2>${data[i].title}</h2>
                        </div>
                        <div>
                            <img style="${data[i].position}" src="${data[i].image}" alt="">
                        </div>
                    </div>`)
            }
        }
    })
}