let array = ["cachorro", "gato", "vaca","mamute","guepardo"];

let arrayFinal = array.map((elemento)=>{
    if(elemento.length < 5){
        return "BATATA";
    }else{
        return elemento.toUpperCase();
    }
})

console.log(arrayFinal);
 