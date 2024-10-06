// Seleciona os elementos
const hamburger = document.querySelector('.hamburger');
const tabMenu = document.querySelector('.tab-menu');
const tabLinks = document.querySelectorAll('.tab-link');

// Alterna a visibilidade do menu quando o hambúrguer é clicado
hamburger.addEventListener('click', () => {
    tabMenu.classList.toggle('active');
});

// Função para fechar o menu
function closeMenu() {
    tabMenu.classList.remove('active');
}

// Adiciona um evento para cada link de aba
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão

        // Remove a classe 'active' de todas as abas
        tabLinks.forEach(tab => tab.classList.remove('active'));

        // Adiciona a classe 'active' na aba clicada
        link.classList.add('active');

        // Fecha o menu após o clique
        closeMenu();

        // Carrega o conteúdo da aba correspondente
        const tabContent = document.querySelector(`[data-tab-content="${link.dataset.tab}"]`);
        document.querySelectorAll('[data-tab-content]').forEach(content => {
            content.style.display = 'none'; // Esconde todos os conteúdos
        });
        tabContent.style.display = 'block'; // Mostra o conteúdo correspondente
    });
});
