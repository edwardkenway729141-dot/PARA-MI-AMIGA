
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const final = document.getElementById("final");

const abrir = document.getElementById("abrir");
const finalizar = document.getElementById("finalizar");

const parrafos = document.querySelectorAll("#mensaje p");

function cambiarPantalla(actual, siguiente) {
  actual.classList.remove("activa");
  siguiente.classList.add("activa");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

abrir.addEventListener("click", () => {
  cambiarPantalla(inicio, carta);

  parrafos.forEach((parrafo, indice) => {
    setTimeout(() => {
      parrafo.classList.add("visible");

      if (indice === parrafos.length - 1) {
        setTimeout(() => {
          finalizar.classList.remove("oculto");
        }, 1200);
      }
    }, 500 + indice * 1300);
  });
});

finalizar.addEventListener("click", () => {
  cambiarPantalla(carta, final);
});