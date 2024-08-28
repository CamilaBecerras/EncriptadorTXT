// Función para encriptar el texto
function encriptar() {
    var texto = document.getElementById('inputText').value;

    // Aviso: El texto solo contenga letras minúsculas sin acentos
    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
        return;
    }

   
    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('outText').value = textoEncriptado;

    // Mostrar el candado cerrado dependiendo de la acción del usuario
    document.querySelector('.icon-flecha').style.display = 'none';
    document.querySelector('.icon-candado-abierto').style.display = 'none';
    document.querySelector('.icon-candado-cerrado').style.display = 'block';
}

// Función para desencriptar el texto
function desencriptar() {
    var texto = document.getElementById('outText').value;

   
    var textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('outText').value = textoDesencriptado;

    // Mostrar el candado abierto dependiendo de la acción del usuario
    document.querySelector('.icon-flecha').style.display = 'none';
    document.querySelector('.icon-candado-cerrado').style.display = 'none';
    document.querySelector('.icon-candado-abierto').style.display = 'block';
}

// Función para pegar el texto en la caja de entrada
function pegar(textAreaID) {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById(textAreaID).value = text;
        })
        .catch(err => {
            console.error('Error al pegar el texto: ', err);
        });
}

// Función para copiar el texto de la caja de salida
function copiar(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

// Mostrar el ícono adecuado
document.getElementById('inputText').addEventListener('input', function () {
    var texto = this.value;

    // Si el campo de texto está vacío, mostrar el icono de la flecha
    if (texto === "") {
        document.querySelector('.icon-flecha').style.display = 'block';
        document.querySelector('.icon-candado-abierto').style.display = 'none';
        document.querySelector('.icon-candado-cerrado').style.display = 'none';
    }
});