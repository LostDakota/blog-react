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
    let lightbulb = document.createElement('img');
    lightbulb.src = '/icons/lightbulb.svg';
    lightbulb.width = "30";
    lightbulb.height = "30";
    lightbulb.style.position = 'fixed';
    lightbulb.style.bottom = '1rem';
    lightbulb.style.right = '1rem';
    lightbulb.style.filter = 'opacity(.5)';
    lightbulb.id = 'dark-mode';

    document.body.appendChild(lightbulb);

    document.getElementById('dark-mode').addEventListener('click', () => flipTheSwitch());

    if (prefersDarkScheme && localStorage.getItem('mode') !== 'light') {
        localStorage.setItem('mode', 'dark');
        document.body.classList.add('dark');
    }

    document.addEventListener('DOMContentLoaded', () => {
        console.log(':fire 1');
        setTimeout(() => {
            const init = document.createElement('script');
            init.innerText = `(function() { document.querySelectorAll('pre code').forEach((block) => {hljs.highlightBlock(block);}); })();`;
            document.body.appendChild(init);
        }, 600);
    });
})();