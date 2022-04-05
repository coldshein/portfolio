
  const links = document.querySelectorAll('.link');
links.forEach(el=>{
    el.addEventListener('click', function(){
        for(link of links){
            link.classList.remove('active-link');
        }
        el.classList.add('active-link');
    })
    
})

// BURGER
const burger = document.querySelector('.burger-menu');
const burgerNav = document.querySelector('.burger-nav');
const burgerLink = document.querySelectorAll('.burger-link');
burger.addEventListener('click', function(){
  burger.classList.toggle('open-burger');
  burgerNav.classList.toggle('open-menu');
  
})

// CLOSING BURGER NAV AFTER LINK CLICKED

burgerLink.forEach(el => {
  el.addEventListener('click', function(){
    burger.classList.remove('open-burger');
    burgerNav.classList.remove('open-menu');
  })
});


VANTA.TRUNK({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 0.00,
  scaleMobile: 0.00,
  color: 0xDB1919,
  backgroundColor: 0x1D1D1D,
  spacing: 0.00,
  chaos: 6.00
})



