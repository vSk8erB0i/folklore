document.addEventListener("DOMContentLoaded", () => {
    // Configuración del parallax para desktop
    const setupParallax = () => {
        const layers = {
            grass: { element: document.getElementById("grass"), speed: 0.1 },
            trees: { element: document.getElementById("trees"), speed: 0.3 },
            trees1: { element: document.getElementById("trees1"), speed: 0.2 },
            soil: { element: document.getElementById("soil"), speed: 0.07 },
            trees2: { element: document.getElementById("trees2"), speed: 0.4 },
            tree: { element: document.getElementById("tree"), speed: 0.06 },
            taylor: { element: document.getElementById("taylor"), speed: 0.05 },
            soil1: { element: document.getElementById("soil1"), speed: 0.05 },
            tree1: { element: document.getElementById("tree1"), speed: 0.04 },
            tree2: { element: document.getElementById("tree2"), speed: 0.03 }
        };

        const updateParallax = () => {
            const scrollY = window.scrollY;
            Object.values(layers).forEach(layer => {
                if (layer.element) {
                    layer.element.style.transform = `translateY(${scrollY * layer.speed}px)`;
                }
            });
        };

        window.addEventListener("scroll", updateParallax);
        updateParallax();
    };

    if (window.innerWidth > 992) {
        setupParallax();

        document.querySelector('.parallax-spacer').style.height = '100vh';
        document.getElementById("home").style.position = 'fixed';
    } else {
        document.getElementById("home").style.position = 'relative';
        document.getElementById("home").style.height = window.innerWidth <= 768 ? '60vh' : '70vh';
        document.querySelector('.mobile-spacer').style.height = window.innerWidth <= 768 ? '60vh' : '70vh';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            document.querySelector('.parallax-spacer').style.height = '100vh';
            document.getElementById("home").style.position = 'fixed';
            setupParallax();
        } else {
            document.getElementById("home").style.position = 'relative';
            document.getElementById("home").style.height = window.innerWidth <= 768 ? '60vh' : '70vh';
            document.querySelector('.mobile-spacer').style.height = window.innerWidth <= 768 ? '60vh' : '70vh';
        }
    });
});
