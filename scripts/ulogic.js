let listLocal = JSON.parse(localStorage.getItem("usuarios"));
export const usersList = listLocal == null ? [] : listLocal;

export const dibujarUsuarios = () => {
  const lista = document.querySelector(".users-list");
  usersList.map((user, index) => {
    lista.innerHTML += `<section class="user">
    <span>${user.name}</span>
    <span>${index}</span>
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

      const boton = document.getElementById("verificar-pass");
      
      boton.addEventListener("click", (e) => {
        const inputValue = document.getElementById("inputcontra").value
        verificarPass(contra,inputValue);
      });

      console.log("hola " + name);
    });
  });
};

const crearModalUser = (container, name) => {
  container.innerHTML = `
  <h2>hola ${name}</h2>
  <span>Ingresa la contraseña</span>
  <input type="password" id="inputcontra"></input>
  <button id="verificar-pass">Ingresar</button>
  `;
};

const verificarPass = (contra, inputvalue) => {
  if (contra === inputvalue) {
    console.log("la contraseña es igual")
  window.open("./app/app.html","_self")
  }else{
    console.log("la contraseña es diferente")
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
