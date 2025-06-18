const imageUrls = [
    "semillas/tarjeta-amarillo.png", // Asumiendo que esta imagen está en la carpeta 'images' dentro de tu repositorio
    "semillas/tarjeta-azul.png",
    "semillas/tarjeta-overpass-1.png",
    "semillas/tarjeta-overpass-2.png",
    "semillas/tarjeta-overpass.png",
    "semillas/tarjeta-rojo.png",
    "semillas/tarjeta-verde.png"
    // ... y así sucesivamente para todas tus imágenes
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const selectedImageUrl = imageUrls[randomIndex];
    document.getElementById('randomImage').src = selectedImageUrl;
}

window.onload = displayRandomImage;