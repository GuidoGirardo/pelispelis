document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const peliculas = document.querySelectorAll(".seccion");

    searchBar.addEventListener("input", function() {
        const searchTerm = searchBar.value.trim().toLowerCase();

        peliculas.forEach(function(pelicula) {
            const titulo = pelicula.querySelector("h3").textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                pelicula.style.display = "block";
            } else {
                pelicula.style.display = "none";
            }
        });
    });
});