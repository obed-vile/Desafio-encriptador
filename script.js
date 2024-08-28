// script.js
document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});

function encrypt(text) {
    // Lógica de encriptación (puedes modificarla según lo necesites)
    let encrypted = text.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
    return encrypted;
}

function decrypt(text) {
    // Lógica de desencriptación (puedes modificarla según lo necesites)
    let decrypted = text.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ai/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/ufat/g, "u");
    return decrypted;
}
function myFunction() {
    // Ocultar la imagen
    const myDiv = document.getElementById("miDIV");
    if (myDiv) {
        myDiv.style.display = "none";
    } else {
        console.error('No se encontró el elemento con id "miDIV".');
    }
    
    // Ocultar el texto "Ningún mensaje fue encontrado"
    const noMessageText = document.querySelector('.no-message');
    if (noMessageText) {
        noMessageText.style.display = "none";
    } else {
        console.error('No se encontró el elemento con la clase "no-message".');
    }
    
    // Ocultar el primer elemento con la clase "instruction-text"
    const instructionText = document.querySelector('.instruction-text');
    if (instructionText) {
        instructionText.style.display = "none";
    } else {
        console.error('No se encontró el elemento con la clase "instruction-text".');
    }
}

    // Cambiar la altura del textarea con id "outputText"
    const outputText = document.getElementById("outputText");
    if (outputText) {
        outputText.style.height = "450px";
    } else {
        console.error('No se encontró el textarea con id "outputText".');
    }

  







// copiar texto
document.getElementById('copyBtn').addEventListener('click', function() {
    // Selecciona el texto del textarea
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
    }
});
