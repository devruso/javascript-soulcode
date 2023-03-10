const semaforoImg = document.getElementById('semaforo-img');
const textoImg = document.getElementById('semaforo-descricao');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

btn1.addEventListener('click',()=>{
    semaforoImg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
    textoImg.innerText = "PARE!";
})

btn2.addEventListener('click', ()=>{
    semaforoImg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png";
    textoImg.innerText= "ATENÇÃO!";
})

btn3.addEventListener('click',() =>{
    semaforoImg.src = "https://i.postimg.cc/vHtqWwBn/verde.png";
    textoImg.innerText = "PROSSIGA!"
})

// Exercício: Aplicar estilizações na página empresa
// Limpar os campos após concatenar