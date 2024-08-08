let listLocal = JSON.parse(localStorage.getItem("usuarios"));
let usersList = listLocal == null ? [] : listLocal;

export const dibujarUsuarios = () => {
  const lista = document.querySelector(".users-list");
  usersList.map((user, index) => {
    lista.innerHTML += `<section class="user" index=${index}>
    <span>${user.name}</span>
    <span>${index}</span>
    </section>`;
  });
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
