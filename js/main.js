// $('#slider1').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:1
//         }
//     }
// })
$("#slider1").owlCarousel({
    paginationSpeed: 400,
    nav:true,
    loop:true,
    navText: false,
    items: 1,
    itemsCustom: [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 2],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
    ],
});
$("#recent").owlCarousel({
    paginationSpeed: 400,
    nav:true,
    loop:true,
    // navText: false,
    items: 3,
    itemsCustom: [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 2],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
    ],
});