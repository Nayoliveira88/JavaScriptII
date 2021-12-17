// function carregamentoPagina( ) {
//     alert("Mensagem apresentada no carregamento do sistema");
// }

function populaTabela() {
    if (localStorage.getItem("produtos")) {
        let produtos = JSON.parse(localStorage.getItem("produtos"))

        produtos.forEach((produto) => {
            $("#tblProdutos tbody").append(`<tr>
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.valor}</td>
                <td style="width: 50px><button type="button" class="btn-info">E</button></td>
                <td style="width: 50px><button type="button" class="btn-danger">D</button></td>
            </tr>`)
        })
    }
}

$(() => {
    //código executado no carregamento da pagina
    // alert("Mensagem apresentada no carregamento do sistema");

    $("#btnSalvar").click(() => {
      //  console.log ("Função click funcionou")
        // localStorage.setItem("key", "efetivo valor que será armazenado")

        let produto = {}
        produto.nome = $("#nmProduto").val()
        produto.quantidade = $("#quantidade").val()
        produto.valor = $("#vlrProduto").val()

        let listaProdutos = []
        listaProdutos.push(produto)

        localStorage.setItem("produtos", JSON.stringify(listaProdutos))

        alert("Produto salvo com sucesso")

        $("nmProduto").val("")
        $("quantidade").val("")
        $("vlrProduto").val("")

        populaTabela()
    })
})