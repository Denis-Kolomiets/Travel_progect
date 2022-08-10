// Карусель
const owl = $('.owl-carousel');
owl.owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        item: 3,
        responsive : {
            
            0 : {  
                margin: 5
            },
            480 : {    
                item: 2,
                margin: 5
            },
            1000 : {
                margin: 15
            },
            1200 : {
                margin: 30
            }
        }
});

// Go to the previous item
$('.slider__bnt--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

// Go to the next item
$('.slider__bnt--next').click(function() {
    owl.trigger('next.owl.carousel');
})


/*burger */

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
    
    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('nav-mobile')
    document.body.classList.toggle('no-scroll');
}
