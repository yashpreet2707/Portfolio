// preloader 

// const preloader = document.querySelector(".preloader") ;
//     window.addEventListener("load", ()=>{
//         preloader.style.display = "none" ;
//     })

// title change 

document.addEventListener('visibilitychange',
function () {
    if ( document.visibilityState === "visible" ) {
        document.title = "Portfolio | Yashpreet Singh" ;
    } 
    else {
            document.title = "Come back to Portfolio";
        }
}) ;


$('#menu').click(function () {
$(this).toggleClass('fa-times') ;
$(".nav-part").toggleClass('hello') ;
$(".header").toggleClass('header-click') ;
$(".navbar").toggleClass('navbar-click') ;
$(".nav-ul").toggleClass('nav-ul-click') ;
$("#navbar-h2").toggle() ;
}) ;




// vanilla tilt js 

VanillaTilt.init(document.querySelector(".yash-img"), {
    max: 25,
    speed: 400
});


