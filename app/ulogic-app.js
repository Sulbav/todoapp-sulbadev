export const determinarUsuarioSesion = ()=>{
    const usuarioEnSesion = localStorage.getItem("sesionDeUsuario");
    const userobjet = JSON.parse(localStorage.getItem("usuarios"))[usuarioEnSesion];
    return userobjet
}

export const CerrarSesion = () =>{
    localStorage.removeItem("sesionDeUsuario")
    window.location.href = '../app.html';
}