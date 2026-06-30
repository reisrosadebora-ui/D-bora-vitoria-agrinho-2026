// Função para alternar as abas entre Agricultura Familiar e Agronegócio
function switchTab(type) {
    // Remove a classe ativa de todos os botões
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Remove a classe de conteúdo ativo de todas as seções
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-content'));

    // Adiciona as classes ativas no elemento clicado e no seu respectivo conteúdo
    if (type === 'familiar') {
        document.getElementById('content-familiar').classList.add('active-content');
        event.currentTarget.classList.add('active');
    } else if (type === 'agronegocio') {
        document.getElementById('content-agronegocio').classList.add('active-content');
        event.currentTarget.classList.add('active');
    }
}
