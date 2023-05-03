window.onload = function(){

// Configuração do menu Mobile
btnMobile = document.querySelector("#btn-mobile").addEventListener('click',()=>{
    console.log('foi')
    const nav = document.querySelector("nav");
    nav.classList.toggle("active")
})


}