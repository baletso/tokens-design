const imageUrls = [
    "URL_DE_TU_IMAGEN_1.jpg",
    "URL_DE_TU_IMAGEN_2.png",
    "URL_DE_TU_IMAGEN_3.jpeg",
    // Agrega aquí todas las URLs de tus imágenes, cada una entre comillas y separada por coma
    "URL_DE_TU_IMAGEN_N.gif"
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const selectedImageUrl = imageUrls[randomIndex];
    document.getElementById('randomImage').src = selectedImageUrl;
}

// Llama a la función cuando la página se carga
window.onload = displayRandomImage;