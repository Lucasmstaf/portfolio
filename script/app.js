// Gerenciamento de Animações
document.addEventListener('DOMContentLoaded', () => {
    // Animações dos Links de Navegação
    const linksNavegacao = document.querySelectorAll('.apresentacao__links__navegacao');
    
    linksNavegacao.forEach(link => {
        // Efeito de elevação no hover
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
            link.style.transition = 'all 0.3s ease';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });

        // Efeito de escala no ícone
        const icone = link.querySelector('img');
        if (icone) {
            link.addEventListener('mouseenter', () => {
                icone.style.transform = 'scale(1.1)';
                icone.style.transition = 'all 0.3s ease';
            });

            link.addEventListener('mouseleave', () => {
                icone.style.transform = 'scale(1)';
            });
        }
    });

    // Animações da Imagem de Perfil
    const imagemPerfil = document.querySelector('.apresentacao__imagem');
    if (imagemPerfil) {
        imagemPerfil.addEventListener('mouseenter', () => {
            imagemPerfil.style.transform = 'scale(1.02)';
            imagemPerfil.style.transition = 'all 0.5s ease';
        });

        imagemPerfil.addEventListener('mouseleave', () => {
            imagemPerfil.style.transform = 'scale(1)';
        });
    }

    // Animações dos Projetos
    const projetos = document.querySelectorAll('.projeto');
    projetos.forEach(projeto => {
        projeto.addEventListener('mouseenter', () => {
            projeto.style.transform = 'translateY(-5px)';
            projeto.style.transition = 'all 0.3s ease';
        });

        projeto.addEventListener('mouseleave', () => {
            projeto.style.transform = 'translateY(0)';
        });
    });

    // Animações do Botão de Tema
    const botaoTema = document.querySelector('.theme-toggle');
    if (botaoTema) {
        botaoTema.addEventListener('mouseenter', () => {
            botaoTema.style.transform = 'scale(1.1)';
            botaoTema.style.transition = 'all 0.3s ease';
        });

        botaoTema.addEventListener('mouseleave', () => {
            botaoTema.style.transform = 'scale(1)';
        });
    }
}); 