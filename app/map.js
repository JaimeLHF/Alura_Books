function aplicar_desconto(livros) {
    const desconto = 0.3
    livros_desconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livros_desconto
}