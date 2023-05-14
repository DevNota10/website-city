window.onload = function(){

    // Configuração do menu Mobile
    btnMobile = document.querySelector("#btn-mobile").addEventListener('click',()=>{
        console.log('foi')
        const nav = document.querySelector("nav");
        nav.classList.toggle("active")
    })

 

// Scroll Suave:
function getDistanceFromTheTop(element){
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;
}

function scrollToSection(event){
    event.preventDefault();

    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 100;
    smoothScrollTo(0,distanceFromTheTop)
}

    const links = document.querySelectorAll("nav a[href^='#']");
    links.forEach((link)=>{
        link.addEventListener("click",scrollToSection);
             
    })

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== "undefined" ? duration : 600;
      
        const easeInOutQuart = (time, from, distance, duration) => {
          if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
          return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
            clearInterval(timer);
          }
          window.scroll(newX, newY);
        }, 1000 / 60);
      }


    // Animation motorcycle
    animeMotor()
    function animeMotor(){
        const moto = document.querySelector(".motorcycle-wall").addEventListener('click',()=>{
            const moveMoto = document.querySelector('.motorcycle');
            
            setTimeout(function(){
                moveMoto.style.animation =" move-motorcycle ease  15s ";
                const sound = document.querySelector('#sound').play();
            },500)
        })
    }

    //  Description of car:
        const imgCar = document.querySelectorAll(".img-car");
        let textCar = document.querySelectorAll(".text-car");
        imgCar.forEach((el,ind)=>{
            el.addEventListener('click',()=>{
            el.childNodes[1].classList.toggle("activeText");
            animationTextCar(text);
                
            })
            
        })


  

 
}