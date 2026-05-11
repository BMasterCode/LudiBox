// Gira las cartas al hacer click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const back = card.querySelector(".card-back");
        const isFlipped = card.classList.contains("volteada");

        //if (card.classList.contains("volteada")) {
        if (!isFlipped) {
            // Mostrar temporalmente el back fuera de vista para medir altura
            back.style.visibility = "hidden";
            back.style.display = "block";
            const alturaReal = back.scrollHeight;
            back.style.display = "";
            back.style.visibility = "";

            // Esperar a que termine la rotación
            setTimeout(() => {
                card.style.height = alturaReal + "px";
                back.style.height = alturaReal + "px";
            }, 800); // coincide con la duración de transform

            // Agregar clase volteada
            card.classList.add("volteada");
        } else {
            // Volver al tamaño original
            //card.style.height = "300px";
            //back.style.height = "300px";

            // Si ya está volteada (viendo el back): primero encoger, luego girar
            const alturaOriginal = 300; // altura del frente
            back.style.transition = "height 0.6s ease";
            back.style.height = alturaOriginal + "px";
            card.style.height = alturaOriginal + "px";

            // Esperar que termine la transición antes de girar
            setTimeout(() => {
                card.classList.remove("volteada");
            }, 600); // el tiempo que tarda en encogerse

        }
    });
});

// Efecto de agrandar al hacer click



document.querySelectorAll(".ejemplo").forEach(elemento => {
    elemento.addEventListener("click", (event) => {
        event.stopPropagation(); // evita interferir con el giro de la carta

        if (elemento.classList.contains("grande")) return;
        document.body.classList.add("fondo-oscuro");
        // Agrega la clase para agrandar
        elemento.classList.add("grande");

        // Cierra al hacer click fuera del elemento
        const cerrarAlHacerClickFuera = (e) => {
            if (!elemento.contains(e.target)) {
                elemento.classList.remove("grande");
                document.body.classList.remove("fondo-oscuro");
                document.removeEventListener("click", cerrarAlHacerClickFuera);
            }
        };
        document.addEventListener("click", cerrarAlHacerClickFuera);
    });
});

const modal = document.getElementById("promoModal");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};