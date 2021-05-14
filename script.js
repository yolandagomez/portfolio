


//creando un botón que vuelve hacia arriba




const myRootElement = document.documentElement
function clickAndScrollToTop () {
    myRootElement.scrollTo({top: 0, behavior: 'smooth'})
};

myButton.addEventListener('click', clickAndScrollToTop);

//function that shows my button when scrolling down
document.addEventListener('scroll', function() {
    if (window.pageYOffset > 230) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
});
    




//Function of changing the sandwich for x: 

//Selection of HTML objects
const burger = document.querySelector('.toggleNav i'); //seleccionar botón
const nav = document.querySelector('.nav');

// Defining a function
/*function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    /*nav.classList.toggle('nav-active');}*/


// Calling the function after click event occurs
/*burger.addEventListener('click', function() {
    showNav();
});*/


/* función que vuelve a guardar mi barra sandwich 
*/

   function showNav () {
   nav.classList.toggle('active');
    burger.classList.toggle('fa-bars');
   burger.classList.toggle('fa-times');
   };

burger.addEventListener('click', showNav);

/*Function to hide the nav when clicking in a link of the menu*/

const navLink = document.querySelectorAll('.nav-link');

function navLinkClick () {
    nav.removeClass('active');
}
navLink.addEventListener('click', navLinkClick);



