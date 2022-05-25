import { strictEqual } from "assert";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log(`\nLista de produtos:`);
        console.log(`Id\tNome`)
        console.log(`--------------------------------------`);
        this.produtos.forEach(produto => {
            console.log(produto.id+ `\t`+ produto.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarProdutosMaisConsumidos(clientes: Array<Cliente>): Array<Produto>{
        let produtosMaisConsumidos: Array<Produto> = [];
        this.produtos.forEach(produto => {
            produtosMaisConsumidos.push(produto);
        })

        produtosMaisConsumidos.forEach(p => {
            let quantidadeConsumida = 0;
            clientes.forEach(cliente => {
                cliente.produtosConsumidos.forEach(produtoConsumido => {
                    if(produtoConsumido.id == p.id){
                        quantidadeConsumida = quantidadeConsumida + 1;
                    }
                })
            })
            p.quantidadeConsumida = quantidadeConsumida;
        })

        produtosMaisConsumidos.sort((p1, p2) => (p1.quantidadeConsumida > p2.quantidadeConsumida) ? -1 : 1)
        console.log(`\nProdutos mais consumidos: `);
        let ordem = 1;
        produtosMaisConsumidos.forEach(p => {
            console.log(ordem+`º Nome do Produto: `+ p.nome +   `\t\tQuantidade Consumida: `+ p.quantidadeConsumida);
            ordem++;
        });
        console.log(`--------------------------------------------------------------`);
        return produtosMaisConsumidos;
    }
}