const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Verifica se há um tema salvo no localStorage
const currentTheme = localStorage.getItem('theme');

// Se houver um tema salvo, aplica-o
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Função para alternar o tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Adiciona o evento de clique ao botão
themeToggle.addEventListener('click', toggleTheme);

// Verifica a preferência do sistema e aplica o tema inicial
if (!currentTheme) {
    if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
} 