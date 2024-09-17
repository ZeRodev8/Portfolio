document.addEventListener('DOMContentLoaded', () => {
    // Obtener el estado actual del tema desde localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme);

    // Referencias a los iconos
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');

    // Función para alternar entre los temas
    function toggleTheme() {
        if (document.body.classList.contains('light')) {
            document.body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    // Añadir el evento de clic a los iconos
    lightIcon.addEventListener('click', toggleTheme);
    darkIcon.addEventListener('click', toggleTheme);
});


document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');

    video.addEventListener('ended', () => {
        video.classList.add('fade-out');
        setTimeout(() => {
            video.currentTime = 0;
            video.classList.remove('fade-out');
            video.play();
        }, 1000); // Tiempo del desvanecimiento
    });
});

