console.log("hello hello, bienvenide a mi página")

const btnTema = document.getElementById("btn-tema");
const body = document.body;

btnTema.addEventListener("change", () => {
    body.classList.toggle("oscuro", btnTema.checked);
})

const numero = document.getElementById("numero");
const btnContador = document.getElementById("btn-contador");
let contador = 0;

btnContador.addEventListener("click", () => {
    contador++;
    numero.textContent = contador;
}
)
