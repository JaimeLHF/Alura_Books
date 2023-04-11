const btns = document.querySelectorAll('.btn')

btns.forEach(btn => btn.addEventListener('click', filtrar_livros))


function filtrar_livros() {
    const elemento_btn_value = document.getElementById(this.id)
    let livros_filtrados = livros.filter(livro => livro.categoria == elemento_btn_value.value)
    exibirLivros(livros_filtrados)
}