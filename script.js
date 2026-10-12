alert("hello hello, bienvenide a mi página")

const btnTema = document.getElementById("btn-tema");
const body = document.body;

btnTema.addEventListener("change", () => {
    body.classList.toggle("oscuro", btnTema.checked);
})
