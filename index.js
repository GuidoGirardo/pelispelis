document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const peliculas = document.querySelectorAll(".peliculas");

    searchBar.addEventListener("input", function() {
        const searchTerm = searchBar.value.trim().toLowerCase();

        peliculas.forEach(function(pelicula) {
            const titulo = pelicula.querySelector("h3").textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                pelicula.style.display = "flex";
            } else {
                pelicula.style.display = "none";
            }
        });
    });

    let btnExpandirPeli = document.querySelectorAll(".btnExpandirPeli");
    btnExpandirPeli.forEach(button => {
        button.addEventListener("click", ()=>{
            if(button.parentElement.style.height == "" || button.parentElement.style.height == "360px"){
                button.parentElement.style.height = "fit-content";
                button.textContent = "↑";
            }
            else{
                button.parentElement.style.height = "360px";
                button.textContent = "↓";
            }
        });
    });

});