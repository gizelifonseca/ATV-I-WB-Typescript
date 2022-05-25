import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import Empresa from "../modelo/empresa";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(empresa: Empresa) {
        super()
        this.clientes = empresa.clientes
        this.servicos = empresa.servicos
        this.produtos = empresa.produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o gênero (M - Masculino e F - Feminino): `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let numeroCPF = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataEmissaoCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);

        let numeroRG = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataEmissaoRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);

        let ddd = this.entrada.receberTexto(`Por favor informe o ddd: `)
        let numeroTelefone = this.entrada.receberTexto(`Por favor informe o número do telefone: `)

        let listagemPrdutos = new ListagemProdutos(this.produtos);
        listagemPrdutos.listar();

        let produtosConsumidos: Array<Produto> = []
        let idsProdutosString = this.entrada.receberTexto(`Por favor informe os Ids dos produtos consumidos separados por vírgula: `)
        if(idsProdutosString != undefined){
            let idsProdutos = idsProdutosString.split(',');
            idsProdutos.forEach(idProduto => {
                this.produtos.forEach(produto => {
                    if(produto.id == new Number(idProduto)){
                        produtosConsumidos.push(produto);
                    }
                })
            })

        }

        let listagemServicos = new ListagemServicos(this.servicos);
        listagemServicos.listar();
        
        let servicosConsumidos: Array<Servico> = []
        let idsServicosString = this.entrada.receberTexto(`Por favor informe os Ids dos serviços consumidos separados por vírgula: `)
        if(idsServicosString != undefined){
            let idsServicos = idsServicosString.split(`,`)
            idsServicos.forEach(idServico => {
                this.servicos.forEach(servico => {
                    if(new Number(idServico) == servico.id){
                        servicosConsumidos.push(servico);
                    }
                });
            });
        }

        let telefone = new Telefone(ddd, numeroTelefone);
        let cpf = new CPF(numeroCPF, this.getDate(dataEmissaoCPF));
        let rg = new RG(numeroRG, this.getDate(dataEmissaoRG));
        
        let cliente = new Cliente(this.clientes.length, nome, genero, nomeSocial, cpf, rg, telefone, produtosConsumidos, servicosConsumidos);        
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    private getDate(data: string): Date{
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        return new Date(ano, mes, dia);
    }
    
}