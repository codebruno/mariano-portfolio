document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        // Remover a classe "active" de todos os links e conteúdo
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Adicionar a classe "active" ao link clicado e ao conteúdo correspondente
        const targetTab = this.getAttribute('data-tab');
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});
