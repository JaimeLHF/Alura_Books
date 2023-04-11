let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosIP()

async function getBuscarLivrosIP() {
    const resp = await fetch(endpointAPI)
    livros = await resp.json()
    let livros_desconto = aplicar_desconto(livros)
    exibirLivros(livros_desconto)
}

