// Banco de dados fake
const usuarios = [
    {
        nomeUsuario: "batata",
        email: "jose.almir@email.com",
        senha: "12345",
        administrador: true,
    },
    {
        nomeUsuario: "gabriel-braga",
        email: "gabriel.braga@email.com",
        senha: "12345",
        administrador: true,
    },
    {
        nomeUsuario: "Jamilson SoulCode",
        email: "jamilson.soulcode@email.com",
        senha: "12345",
        administrador: false,
    },
    {
        nomeUsuario: "Lucas Damasceno",
        email: "lucas.soulcode@email.com",
        senha: "12345",
        administrador: false,
    },
    {
        nomeUsuario: "Luciana Monteiro",
        email: "luciana.soulcode@email.com",
        senha: "12345",
        administrador: false,
    },
    {
        nomeUsuario: "Raissa Kimberly",
        email: "raissa.soulcode@email.com",
        senha: "12345",
        administrador: false,
    },
    {
        nomeUsuario: "Nilson Mazurchi",
        email: "nilson.soulcode@email.com",
        senha: "12345",
        administrador: false,
    },
    {
        nomeUsuario: "usuario fake1",
        email: "usuariofake1.soulcode@email.com",
        senha: "12345",
        administrador: true,
    },
    {
        nomeUsuario: "usuario fake2",
        email: "usuariofake2.soulcode@email.com",
        senha: "12345",
        administrador: true,
    },
    {
        nomeUsuario: "usuario fake3",
        email: "usuariofake3.soulcode@email.com",
        senha: "12345",
        administrador: true,
    },
  ];


let table = document.getElementById('admTable');
let contador = 1;

// usuarios.forEach((usuario) => {
//     table.innerHTML += 
//     `
//     <tr>
//     <td>${contador} </td>
//     <td>${usuario.nomeUsuario}</td>
//     <td>${usuario.email} </td>
//     <td>${usuario.administrador} </td>
//     </tr>
//     `;
//     contador++;
// })

// // A find apenas retorna o primeiro elemento encontrado
// usuarios.find((element) => {
//     if(element.nomeUsuario == "Jamilson SoulCode"){
//         return true;
//     }
// })

// Para usar a filter é necessario criar um novo array para adicionar os elementos que passaram na verificacao 
let array = usuarios.filter((element) => element.nomeUsuario.length > 5)

console.log(array);

// // O map altera o elemento 
// usuarios.map((element) => {
//     if(element.senha === "12345"){
//         element.senha = "54231"
//     }
// })
//console.log(usuarios);
    
