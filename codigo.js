// Gira las cartas al hacer click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const back = card.querySelector(".card-back");
        card.classList.toggle("volteada");

        if (card.classList.contains("volteada")) {
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
        } else {
            // Volver al tamaño original
            card.style.height = "300px";
            back.style.height = "300px";
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
    });
});

// Cuando el usuario toca el fondo, vuelve todo a normal
document.body.addEventListener("click", (event) => {
    // Solo si hizo click fuera de la carta agrandada
    const agrandadas = document.querySelectorAll(".ejemplo.grande");
    agrandadas.forEach(card => card.classList.remove("grande"));

    // Quita el fondo oscuro
    document.body.classList.remove("fondo-oscuro");
}); 



