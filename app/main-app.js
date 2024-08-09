import { CerrarSesion, determinarUsuarioSesion } from "./ulogic-app";

const nombretitle = document.querySelector(".nombre-principal");
const user = determinarUsuarioSesion()

const cerrarSesion = document.getElementById("close-sesion")
cerrarSesion.addEventListener("click",CerrarSesion)



nombretitle.innerHTML = `${user.name}`