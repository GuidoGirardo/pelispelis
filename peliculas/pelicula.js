function cambiarVideo(url, botonActivo) {
    var videoSource = document.getElementById('videoSource');
    videoSource.src = url;

    var botones = document.getElementsByTagName('button');
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove('boton-activo');
    }
    document.getElementById(botonActivo).classList.add('boton-activo');

    console.log(videoSource.src);
}

window.addEventListener('beforeunload', function (event) {
    window.close();

    event.preventDefault();
}, false);