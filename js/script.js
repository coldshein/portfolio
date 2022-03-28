

  const links = document.querySelectorAll('.link');
links.forEach(el=>{
    el.addEventListener('click', function(){
        for(link of links){
            link.classList.remove('active-link');
        }
        el.classList.add('active-link');
    })
    
})

const bubbles = document.querySelectorAll(".bubbly");
let index = 0;
function active(e){
  for (bubble of bubbles){
    bubble.style.opacity=".7";
    bubble.style.backgroundColor="gray";
    bubble.style.boxShadow="";

  }
  bubbles[e].style.opacity="1";
  bubbles[e].style.backgroundColor="red";
  bubbles[e].style.boxShadow="0 0 40px 10px red";
}

function nextRound(){
  if(index == bubbles.length - 1){
    index = 0;
    active(index);
  }
  else{
    index++;
    active(index);
  }
}
setInterval(nextRound, 2000);

// BURGER
const burger = document.querySelector('.burger-menu');
const burgerNav = document.querySelector('.burger-nav');
burger.addEventListener('click', function(){
  burger.classList.toggle('open-burger');
  burgerNav.classList.toggle('open-menu');
  
})





