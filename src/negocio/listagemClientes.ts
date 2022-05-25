import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        this.exibirClientes(this.clientes, `Lista de todos os clientes:`);
    }

    private exibirClientes(clientes: Array<Cliente>, tituloListagem: string): void {

        if (clientes.length > 0) {
            console.log(`\n` + tituloListagem);
            clientes.forEach(cliente => {
                console.log(`ID: ` + cliente.id + `\t` + `Nome: ` + cliente.nome + `\tNome Social: ` + cliente.nomeSocial + `\tCPF: ` + cliente.cpf.valor + `\tRG: ` + cliente.rgs[0].valor + `\tTelefone: `
                    + `(` + cliente.telefones[0].ddd + `) ` + cliente.telefones[0].numero);

                if (cliente.produtosConsumidos.length > 0) {
                    console.log(cliente.produtosConsumidos.length + ` produtos consumidos: `);
                    new ListagemProdutos(cliente.produtosConsumidos).listar();
                }

                if (cliente.servicosConsumidos.length > 0) {
                    console.log(cliente.servicosConsumidos.length + ` serviços consumidos: `);
                    new ListagemServicos(cliente.servicosConsumidos).listar();
                }

                console.log(`--------------------------------------`);
            });
        }
        else {
            console.log(`\nNenhum cliente cadastrado!`);
        }

    }

    public listarPorGenero(genero: string): void {
        let clientesPorGenero: Array<Cliente> = [];
        this.clientes.forEach(cliente => {
            if (cliente.genero == genero) {
                clientesPorGenero.push(cliente);
            }
        })
        this.exibirClientes(clientesPorGenero, `Lista de Clientes Por Gênero = ` + genero);
    }

    public listar10ClientesMaisConsumiram(opcao: string): void {
        let clientesOrdenados: Array<Cliente> = [];
        this.clientes.forEach(cliente => {
            clientesOrdenados.push(cliente);
        });
        
        if(opcao == `P` || opcao == `p`){
            clientesOrdenados.sort((cliente1, cliente2) => 
                (cliente1.produtosConsumidos.length > cliente2.produtosConsumidos.length) ? -1 : 1);
        }
        else if(opcao == `S` || opcao == `s`){
            clientesOrdenados.sort((cliente1, cliente2) => 
                (cliente1.servicosConsumidos.length > cliente2.servicosConsumidos.length) ? -1 : 1);
        }

        console.log(`------------------------------------------------------------\n\n`)
        console.log(`\nLista dos 10 Clientes que mais Consumiram Produtos ou Serviços: `);
        console.log(`------------------------------------------------------------`)
        let qtdClientes = 1;
        clientesOrdenados.forEach(cliente => {
            if (qtdClientes <= 10) {
                console.log(`Ordem: `+ (qtdClientes)+ `º `  +  `\tNome: ` + cliente.nome + `\tQtd Produtos Consumidos: ` + cliente.produtosConsumidos.length
                    + `\tQtd Serviços Consumidos: ` + cliente.servicosConsumidos.length);
                qtdClientes++;
            }
        });

        console.log(`------------------------------------------------------------\n\n`)


    }
    
    public listar10ClientesMenosConsumiram(opcao: string): void {
        let clientesOrdenados: Array<Cliente> = [];
        this.clientes.forEach(cliente => {
            clientesOrdenados.push(cliente);
        });
        
        if(opcao == `P` || opcao == `p`){
            clientesOrdenados.sort((cliente1, cliente2) => 
                (cliente1.produtosConsumidos.length < cliente2.produtosConsumidos.length) ? -1 : 1);
        }
        else if(opcao == `S` || opcao == `s`){
            clientesOrdenados.sort((cliente1, cliente2) => 
                (cliente1.servicosConsumidos.length < cliente2.servicosConsumidos.length) ? -1 : 1);
        }

        console.log(`------------------------------------------------------------\n\n`)
        console.log(`\nLista dos 10 Clientes que menos Consumiram Produtos ou Serviços: `);
        console.log(`------------------------------------------------------------`)
        let qtdClientes = 1;
        clientesOrdenados.forEach(cliente => {
            if (qtdClientes <= 10) {
                console.log(`Ordem: `+ (qtdClientes)+ `º `  +  `\tNome: ` + cliente.nome + `\tQtd Produtos Consumidos: ` + cliente.produtosConsumidos.length
                    + `\tQtd Serviços Consumidos: ` + cliente.servicosConsumidos.length);
                qtdClientes++;
            }
        });

        console.log(`------------------------------------------------------------\n\n`)


    }
}