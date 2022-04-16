let mask = document.querySelector('.mask');

window.addEventListener('load', function(){
  this.window.scrollTo(0,0);
  mask.classList.add("hide");
  this.setInterval(function(){
    mask.remove();
  }, 600)
})

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

// INTERSECTION OBSERVER

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.toggle("observer", entry.isIntersecting);
      observer.unobserve(entry.target);
    }
    
    
  })
})

sections.forEach(section =>{
  observer.observe(section);
})

