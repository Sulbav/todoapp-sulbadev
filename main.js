const nombre = document.getElementById("name")
const password = document.getElementById("password")
const mail = document.getElementById("mail")
const form = document.getElementById("sesion")

let listLocal = localStorage.getItem("usuarios");
let usersList = listLocal==null?[]:JSON.parse(listLocal);

const nuevoUsuario = (name,contra,mail)=>{
  const newUser ={
    name,
    contra,
    mail
  }

  usersList.push(newUser)
  guardarLUsuarios(usersList)
}

const guardarLUsuarios = (lista)=>{
  localStorage.setItem("usuarios",JSON.stringify(lista))
}

form.addEventListener("submit",e=>{
e.preventDefault();
  let user = nombre.value
  let contra = password.value
  let email = mail.value

  if (nombre.lengt >= 4 && password.lengt>= 5) {
    nuevoUsuario(nombre,password,email)
  console.log(localStorage.usuarios)
  }else{
    console.log("no registrado")
  }
})


