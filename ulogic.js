let listLocal = JSON.parse(localStorage.getItem("usuarios"));
const usersList = listLocal == null ? [] : listLocal;

export const dibujarUsuarios = () => {
  const lista = document.querySelector(".users-list");
  usersList.map((user, index) => {
    lista.innerHTML += `<section class="user">
    <span>${user.name}</span>
    <span>N°${index}</span>
    </section>`;
  });
};

export const eventoDeUsuario = (users, modal, container) => {
  users.forEach((user, index) => {
    user.addEventListener("click", (e) => {
      let { name, contra } = usersList[index];

      crearModalUser(container, name);

      modal.style.opacity = 1;
      modal.style.pointerEvents = "fill";

      const boton = document.getElementById("verificar-pass")
      boton.addEventListener("click", (e) => {
        const inputValue = document.getElementById("inputcontra").value;
        verificarPass(contra, inputValue, index);
      });

      const cerrarModal2 = document.getElementById("cerrar-modal2");
      cerrarModal2.addEventListener("click", (e) => {
        modal.style.opacity = 0;
        modal.style.pointerEvents = "none";
      });

    });
  });
};

const crearModalUser = (container, name) => {
  container.innerHTML = `
  <h2>Hola -${name}</h2>
  <span>Ingresa la contraseña</span>
  <input type="password" id="inputcontra"></input>
  <button id="verificar-pass">Ingresar</button>
  <button id="cerrar-modal2">cerrar</button>
  `;
};

const verificarPass = (contra, inputvalue, index) => {
  if (contra === inputvalue) {
    localStorage.setItem("sesionDeUsuario", `${index}`);
    window.location.href = 'app/app.html';
  } else {
    alert("Contraseña incorrecta")
  }
};

export const nuevoUsuario = (name, contra) => {
  const newUser = {
    name,
    contra,
  };

  usersList.push(newUser);
  guardarLUsuarios(usersList);
};

const guardarLUsuarios = (lista) => {
  localStorage.setItem("usuarios", JSON.stringify(lista));
};
