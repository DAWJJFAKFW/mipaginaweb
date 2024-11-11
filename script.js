// Función para verificar el mes de la contraseña
function checkPassword() {
    const monthInput = document.getElementById('month-input').value;
    const correctMonth = "04"; // Abril

    if (monthInput === correctMonth) {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block';
    } else {
        alert("Dios mío, qué tristeza. A ver, otro intento :c.");
    }
}

// Función para verificar la respuesta del lugar
function checkPlace() {
    const placeInput = document.getElementById('place-input').value;
    const correctPlace = "cine"; // Respuesta correcta

    if (placeInput === correctPlace) {
        document.getElementById('content-section').style.display = 'none';
        document.getElementById('nickname-section').style.display = 'block';
        alert("Muy bien, kitirin ¡Qué recuerdos! 💖");
    } else {
        alert("Ushhhh. Intenta de nuevo.");
    }
}

// Función para verificar la respuesta del apodo
function checkNickname() {
    const nicknameInput = document.getElementById('nickname-input').value;
    const correctNickname = "granizo"; // Respuesta correcta

    if (nicknameInput === correctNickname) {
        alert("¡Exacto! Qué bonito recordar todo esto 💖");
    } else {
        alert("¡Ups! Intenta de nuevo.");
    }
}

// Función para abrir la página (mostrar las secciones después de la portada)
function openPage() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('password-section').style.display = 'block';
}
