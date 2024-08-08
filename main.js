import { dibujarUsuarios,nuevoUsuario } from "./ulogic"

window.addEventListener("load",e=>{
  dibujarUsuarios()
})

const modal = document.querySelector(".modal")
const abrirModal = document.getElementById("abrir-modal")
abrirModal.addEventListener("click",e=>{
  modal.style.opacity = 1
  modal.style.pointerEvents = "fill"
})

const form = document.getElementById("sesion")
form.addEventListener("submit",e=>{
  let user = document.getElementById("nombre").value
  let password = document.getElementById("password").value

  if (user.length >= 4 && password.length >= 5) {
    nuevoUsuario(user,password)
  console.log(localStorage.usuarios)
  }else{
    e.preventDefault()
    alert("no registrado")
  }
})


