const imageUrls = [
    "images/tarjeta-amarillo.png", // Asumiendo que esta imagen está en la carpeta 'images' dentro de tu repositorio
    "images/tarjeta-azul.png",
    "images/tarjeta-overpass-1.png",
    "images/tarjeta-overpass-2.png",
    "images/tarjeta-overpass.png",
    "images/tarjeta-rojo.png",
    "images/tarjeta-verde.png"
    // ... y así sucesivamente para todas tus imágenes
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const selectedImageUrl = imageUrls[randomIndex];
    document.getElementById('randomImage').src = selectedImageUrl;
}

window.onload = displayRandomImage;