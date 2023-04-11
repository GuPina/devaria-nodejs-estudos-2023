
try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));
    
    const listaDeProduosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProduosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos nao temos: ${argumento}`));
    
    listaDeProdutosOrdenados.sort();
    listaDeProdutosOrdenados.forEach(produto => console.log(`Esteprodutos esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao foi possivel executar pedido de compra');
}

