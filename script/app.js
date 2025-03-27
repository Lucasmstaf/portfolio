// Gerenciamento de Animações
document.addEventListener('DOMContentLoaded', () => {
    // Função reutilizável para adicionar efeitos de hover
    function adicionarEfeitoHover(elemento, tipo = 'elevacao', valor = -2) {
        elemento.style.transition = 'all 0.3s ease';
        
        elemento.addEventListener('mouseenter', () => {
            elemento.style.transform = tipo === 'elevacao' 
                ? `translateY(${valor}px)` 
                : `scale(${valor})`;
        });

        elemento.addEventListener('mouseleave', () => {
            elemento.style.transform = tipo === 'elevacao' 
                ? 'translateY(0)' 
                : 'scale(1)';
        });
    }

    // Animações dos Links de Navegação
    document.querySelectorAll('.apresentacao__links__navegacao').forEach(link => {
        adicionarEfeitoHover(link);
        
        const icone = link.querySelector('img');
        if (icone) {
            adicionarEfeitoHover(icone, 'escala', 1.1);
        }
    });

    // Animações da Imagem de Perfil
    const imagemPerfil = document.querySelector('.apresentacao__imagem');
    if (imagemPerfil) {
        imagemPerfil.style.transition = 'all 0.5s ease';
        adicionarEfeitoHover(imagemPerfil, 'escala', 1.02);
    }

    // Animações dos Projetos
    document.querySelectorAll('.projeto').forEach(projeto => {
        adicionarEfeitoHover(projeto, 'elevacao', -5);
    });

    // Animações do Botão de Tema
    const botaoTema = document.querySelector('#botao-tema');
    if (botaoTema) {
        adicionarEfeitoHover(botaoTema, 'escala', 1.1);
    }
}); 