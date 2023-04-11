const btn_ordenacao = document.getElementById('btnOrdenarPorPreco')

btn_ordenacao.addEventListener('click', orderLivrosPorPreco)

function orderLivrosPorPreco() {
    livro_ordenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livro_ordenados)
}