document.addEventListener("DOMContentLoaded", function() {
    var banderas = document.querySelectorAll('#banderaPelicula img');
    var peliculas = document.querySelectorAll('section div a');
    var lastSelectedCountry = null;
    var lastSelectedGenre = null;

    banderas.forEach(function(bandera) {
        bandera.addEventListener("click", function() {
            var country = bandera.getAttribute("alt");

            if (country === lastSelectedCountry) {
                // Si se hace clic nuevamente en la misma bandera, restablece las películas y borra el borde
                bandera.style.border = "none";
                lastSelectedCountry = null;
            } else {
                banderas.forEach(function(b) {
                    b.style.border = "none";
                });
                bandera.style.border = "2px solid #ff646c";
                lastSelectedCountry = country;
            }

            filterMovies();
        });
    });

    var buscarPeliculaInput = document.getElementById("buscarPelicula");

    buscarPeliculaInput.addEventListener("input", function() {
        filterMovies();
    });

    var generoPeliculaIcons = document.querySelectorAll('#generoPelicula i');

    generoPeliculaIcons.forEach(function(icon) {
        icon.addEventListener("click", function() {
            var genre = icon.classList[2]; // La tercera clase del icono es el género

            if (genre === lastSelectedGenre) {
                // Si se hace clic nuevamente en el mismo género, restablece el color
                icon.style.color = "";
                lastSelectedGenre = null;
            } else {
                generoPeliculaIcons.forEach(function(i) {
                    i.style.color = "";
                });
                icon.style.color = "#ff646c";
                lastSelectedGenre = genre;
            }

            filterMovies();
        });
    });

    function filterMovies() {
        peliculas.forEach(function(pelicula) {
            var country = lastSelectedCountry;
            var genre = lastSelectedGenre;
            var filtro = buscarPeliculaInput.value.toLowerCase();

            var h3 = pelicula.querySelector("h3");
            var h4 = pelicula.querySelector("h4");

            var titulo = h3.textContent.toLowerCase();
            var detalle = h4.textContent.toLowerCase();

            var mostrarPelicula = true;

            if (country && !pelicula.classList.contains(country)) {
                mostrarPelicula = false;
            }

            if (genre && !pelicula.classList.contains(genre)) {
                mostrarPelicula = false;
            }

            if (!titulo.includes(filtro) && !detalle.includes(filtro)) {
                mostrarPelicula = false;
            }

            if (mostrarPelicula) {
                pelicula.style.display = "block";
            } else {
                pelicula.style.display = "none";
            }
        });

        // Ocultar secciones sin películas visibles
        document.querySelectorAll('section').forEach(function(seccion) {
            var tienePeliculasVisibles = Array.from(seccion.querySelectorAll('a')).some(function(pelicula) {
                return pelicula.style.display !== "none";
            });

            if (!tienePeliculasVisibles) {
                seccion.style.display = "none";
            } else {
                seccion.style.display = "block";
            }
        });
    }
});
