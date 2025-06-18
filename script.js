const imageUrls = [
    "https://drive.google.com/file/d/1UxPOClcYE8Jv-4fY8rDOmHQY0XzI9HJT/view",
    "https://drive.google.com/file/d/1AbMU4RJE2zPtifj2m2gOQfGBL1TVC2T_/view",
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