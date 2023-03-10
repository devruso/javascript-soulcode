let array = ["cachorro", "gato", "vaca","mamute","guepardo"];

let arrayFinal = array.map((elemento)=>{
    if(elemento.length < 5){
        return "BATATA";
    }else{
        return elemento.toUpperCase();
    }
})

 function repeticao(nome){
    for(letra of nome){
        console.log(letra);
    }
}
repeticao("Jamilson");