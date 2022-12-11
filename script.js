const menuAbrir = document.querySelector('#menuH');
const menuFechar = document.querySelector('#menuFechar');
const listaMobile = document.querySelector('#listaMobile');
const frase = document.querySelector('#frase');
const box = document.querySelectorAll('.scroll');
const opcoes = document.querySelectorAll('.opcoes');

menuAbrir.addEventListener('click', menuMobile);
menuFechar.addEventListener('click',menuMobile);


function menuMobile(){
   listaMobile.classList.toggle("active");
   menuAbrir.classList.toggle('active');
   menuFechar.classList.toggle('active');
}

digitando(frase);

function digitando(elemento){
    const arrayDeLetras = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayDeLetras.forEach((letra,indice) =>{
        setTimeout(() =>{
            elemento.innerHTML += letra;
        },90*indice)
    })
}

window.addEventListener('scroll', ativarScroll);

function ativarScroll(){
    box.forEach((elemento,index) => {
        if(elemento.getBoundingClientRect().top < window.innerHeight){
            elemento = elemento.classList.add('box');
        }else{
            elemento = elemento.classList.remove('box');
        }
    })
}

opcoes.forEach((elemento) =>{
    elemento.addEventListener('click',scrollInterno);
})
function scrollInterno(elemento){
    elemento.preventDefault();
    const opcao = elemento.target;
    const id = opcao.getAttribute('href');
    const topoDaOpcao = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: topoDaOpcao - 225,
        behavior: 'smooth'
    })
}

