import { dibujarUsuarios, nuevoUsuario, eventoDeUsuario } from "./ulogic";

const modal2 = document.getElementById("modal2");
const modal2Container = document.getElementById("modal2-container");

window.addEventListener("load", (e) => {
  dibujarUsuarios();
  const users = document.querySelectorAll(".user")
  eventoDeUsuario(users,modal2, modal2Container);
});

const modal1 = document.getElementById("modal1");
const abrirModal1 = document.getElementById("abrir-modal");
const cerrarModal1 = document.getElementById("cerrar-modal");
cerrarModal1.addEventListener("click", (e) => {
  modal1.style.opacity = 0;
  modal1.style.pointerEvents = "none";
});
abrirModal1.addEventListener("click", (e) => {
  modal1.style.opacity = 1;
  modal1.style.pointerEvents = "fill";
});

const form = document.getElementById("sesion");
form.addEventListener("submit", (e) => {
  let user = document.getElementById("nombre").value;
  let password = document.getElementById("password").value;

  if (user.length >= 4 && password.length >= 5) {
    nuevoUsuario(user, password);
  } else {
    e.preventDefault();
    alert("no registrado ---Erro de datos ingresados--- vuelva a intentar");
  }
});
