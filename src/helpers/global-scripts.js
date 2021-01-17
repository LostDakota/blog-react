export default function Global() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    function flipTheSwitch() {
        const stored = localStorage.getItem('mode');
        if (stored === 'dark') {
            document.body.classList.remove('dark');
            localStorage.setItem('mode', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('mode', 'dark');
        }
    }

    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('/service-worker.js');
    }

    (function () {
        document.getElementById('dark-mode').addEventListener('click', () => flipTheSwitch());

        if (prefersDarkScheme && localStorage.getItem('mode') !== 'light') {
            localStorage.setItem('mode', 'dark');
            document.body.classList.add('dark');
        }
    })();
}