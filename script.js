
function obtenerDatos() {
    let fecha = document.getElementById("fecha").value;
    fetch(`http://localhost:3000/servidor/${fecha}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let imagenNasa = document.getElementById("imagen");
        imagenNasa.src= data.url;
        let descripcion = document.getElementById("desc");
        descripcion.textContent = data.explanation;
        let nombre = document.getElementById("titulo");
        nombre.textContent = data.title;
    })
}


