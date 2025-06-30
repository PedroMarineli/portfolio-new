// A importação foi alterada para um URL completo para resolver o erro do módulo.
import { Application } from 'https://unpkg.com/@splinetool/runtime@1.0.9/build/runtime.js';

// --- Lógica do menu (mantida do código original) ---
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobile-menu').classList.add('hidden'));
});

// --- Lógica do Avatar 3D (Método Simplificado) ---

// Encontra o elemento canvas no seu HTML
const canvas = document.getElementById('avatar-canvas');

// Inicia a aplicação do Spline diretamente no canvas
const spline = new Application(canvas);

// Carrega a sua cena do Spline e, em caso de sucesso, exibe uma mensagem na consola.
spline.load('https://prod.spline.design/ztndZT8fJ89p7PFr/scene.splinecode')
    .then(() => {
        console.log('Cena do Spline carregada com sucesso!');
    })
    .catch((error) => {
        console.error('Ocorreu um erro ao carregar a cena do Spline:', error);
    });
