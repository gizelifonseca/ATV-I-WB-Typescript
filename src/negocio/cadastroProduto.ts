import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";


export default class CadastroProdutos extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Produto: `)
        let produto = new Produto(this.produtos.length, nome);
        this.produtos.push(produto);
    }

}