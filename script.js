const imageUrls = [
    "semillas/tarjeta-verde.png",
    "semillas/tarjeta-verde.png",
    "semillas/tarjeta-verde.png",
    "semillas/tarjeta-verde.png",
    "semillas/tarjeta-verde.png",
    "semillas/tarjeta-verde.png",
    "semillas/tarjeta-verde.png",
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const selectedImageUrl = imageUrls[randomIndex];
    document.getElementById('randomImage').src = selectedImageUrl;
}

// Llama a la función cuando la página se carga
window.onload = displayRandomImage;