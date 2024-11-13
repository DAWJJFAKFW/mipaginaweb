// Función para verificar el mes de la contraseña
function checkPassword() {
    const monthInput = document.getElementById('month-input').value;
    const correctMonth = "04"; // Abril

    if (monthInput === correctMonth) {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block';
        alert("Tienes una muy buena memoria kitirin! 💖");
    } else {
        alert("Dios mío, qué tristeza. A ver, otro intento :c.");
    }
}

// Función para verificar la respuesta del primer acertijo (lugar)
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

// Función para verificar la respuesta del segundo acertijo (primer apodo)
function checkNickname() {
    const nicknameInput = document.getElementById('nickname-input').value;
    const correctNickname = "granizo"; // Respuesta correcta

    if (nicknameInput === correctNickname) {
        document.getElementById('nickname-section').style.display = 'none';
        document.getElementById('third-section').style.display = 'block';
        alert("¡Exacto! Qué bonito recordar todo esto 💖");
    } else {
        alert("¡Ups! Intenta de nuevo.");
    }
}

// Función para verificar la respuesta del tercer acertijo (apodo del primo)
function checkPrimoNickname() {
    const primoNicknameInput = document.getElementById('primo-nickname-input').value;
    const correctPrimoNickname = "bicho"; // Respuesta correcta

    if (primoNicknameInput === correctPrimoNickname) {
        document.getElementById('third-section').style.display = 'none';
        document.getElementById('four-section').style.display = 'block';
        alert("¡Qué recuerdos de verdad! 💖");
    } else {
        alert("¡Ups! Intenta de nuevo.");
    }
}

// Función para verificar la respuesta del cuarto acertijo (mascota favorita)
function checkMascotaNickname() {
    const mascotaNicknameInput = document.getElementById('mascota-nickname-input').value;
    const correctMascotaNickname = "todas"; // Respuesta correcta

    if (mascotaNicknameInput === correctMascotaNickname) {
        document.getElementById('four-section').style.display = 'none';
        document.getElementById('video-section').style.display = 'block'; // Muestra la sección del video
        alert("Bieeen, haciendo esta pregunta se me vinieron muchas cosas a la mente 🥰");
    } else {
        alert("Ayyy es en serio? ¡Intenta otra vez!");
    }
}

// Función para abrir la página (mostrar las secciones después de la portada)
function openPage() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('password-section').style.display = 'block';
}
