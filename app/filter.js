const btns = document.querySelectorAll('.btn')

btns.forEach(btn => btn.addEventListener('click', filtrar_livros))


function filtrar_livros() {
    const elemento_btn_value = document.getElementById(this.id)
    let livros_filtrados = elemento_btn_value.value == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == elemento_btn_value.value)
    exibirLivros(livros_filtrados)
    if (elemento_btn_value.value == 'disponivel') {
        const valorTotal = calcularValorTotal(livros_filtrados)     
        exibirValorTotalLivrosDisp(valorTotal)
    }
}

function exibirValorTotalLivrosDisp(valorTotal) {
    elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}