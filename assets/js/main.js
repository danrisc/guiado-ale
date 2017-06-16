function init(){
var button = document.getElementById("boton");
button.addEventListener("click", guardar)
}
function guardar(){
    var clave = document.getElementById("key").value;
    var valor = document.getElementById("value").value;
    sessionStorage.setItem(clave, valor);
var contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "";
    for (var i = 0; i < sessionStorage.length; i++) {
        var kei = sessionStorage.key(i);
        var valuee = sessionStorage.getItem(kei);
        contenedor.innerHTML += "<p>" + kei + " " + valuee + "</p>";
    }
}
init();
