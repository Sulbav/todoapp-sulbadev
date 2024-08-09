import { dibujarUsuarios, nuevoUsuario, eventoDeUsuario } from "./scripts/ulogic";

window.addEventListener("load", (e) => {
  dibujarUsuarios();

  const modal2 = document.getElementById("modal2")
  const modal2Container = document.getElementById('modal2-container')
  eventoDeUsuario(document.querySelectorAll(".user"),modal2,modal2Container);
});


const modal1 = document.getElementById("modal1");
const abrirModal = document.getElementById("abrir-modal");
abrirModal.addEventListener("click", (e) => {
  modal1.style.opacity = 1;
  modal1.style.pointerEvents = "fill";
});

const form = document.getElementById("sesion");
form.addEventListener("submit", (e) => {
  let user = document.getElementById("nombre").value;
  let password = document.getElementById("password").value;

  if (user.length >= 4 && password.length >= 5) {
    nuevoUsuario(user, password);
    console.log(localStorage.usuarios);
  } else {
    e.preventDefault();
    alert("no registrado");
  }
});

