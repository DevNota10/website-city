window.onload = function(){

// Configuração do menu Mobile
btnMobile = document.querySelector("#btn-mobile").addEventListener('click',()=>{
    console.log('foi')
    const nav = document.querySelector("nav");
    nav.classList.toggle("active")
})


// Animation motorcycle
animeMotor()
 function animeMotor(){
    const moto = document.querySelector(".motorcycle-wall").addEventListener('click',()=>{
        const moveMoto = document.querySelector('.motorcycle')
        
        setTimeout(function(){
            moveMoto.style.animation =" move-motorcycle ease  15s infinite";
            const sound = document.querySelector('#sound').play()
        },2000)
    })
 }

//  Description of car:
    const imgCar = document.querySelectorAll(".img-car");
    imgCar.forEach((el,i)=>{
        el.addEventListener('click',()=>{
           console.log(el)
            
        })
    })


    // conf click car 
    // function textCar(){
    //     const text =  document.querySelectorAll(".text-car")
    //     const amtText = text;
        

    // }

 
}