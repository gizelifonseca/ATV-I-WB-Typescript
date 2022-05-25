import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProdutos from "../negocio/cadastroProduto";
import CadastroServicos from "../negocio/cadastroServico";
import FileUtil from "../negocio/fileUtil";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = FileUtil.carregarEmpresa();
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar Produto`);
    console.log(`4 - Cadastrar Servico`);
    console.log("5 - Listar Clientes por Gênero");
    console.log("6 - Listar os 10 Clientes que Mais Consumiram Produtos ou Serviços");
    console.log("7 - Listar os 10 Clientes que Menos Consumiram Produtos ou Serviços");
    console.log("8 - Listar os Produtos ou Serviços Mais Consumidos");
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa)
            cadastro.cadastrar()
            FileUtil.gravarEmpresa(empresa);
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.clientes)
            listagem.listar()
            break;
        case 3:
            let cadastroProdutos = new CadastroProdutos(empresa.produtos);
            cadastroProdutos.cadastrar();
            FileUtil.gravarEmpresa(empresa);
            let listagemPrdutos = new ListagemProdutos(empresa.produtos);
            listagemPrdutos.listar();
            break;
        case 4 :
            let cadastroServicos = new CadastroServicos (empresa.servicos);
            cadastroServicos.cadastrar();
            FileUtil.gravarEmpresa(empresa);

            let listagemServicos = new ListagemServicos (empresa.servicos);
            listagemServicos.listar ();
            break;
        case 5:
            let genero = entrada.receberTexto(`Por favor informe o gênero para filtrar os clientes (M - Masculino e F - Feminino):`)
            new ListagemClientes(empresa.clientes).listarPorGenero(genero);
            break;

        case 6: 
            let opcaoFiltro = entrada.receberTexto(`Por favor, escolha uma opção (P - Produto ou S - Serviço): `)
            new ListagemClientes(empresa.clientes).listar10ClientesMaisConsumiram(opcaoFiltro);
            break;
        case 7: 
            let opcaoFiltro7 = entrada.receberTexto(`Por favor, escolha uma opção (P - Produto ou S - Serviço): `)
            new ListagemClientes(empresa.clientes).listar10ClientesMenosConsumiram(opcaoFiltro7);
            break;
        case 8:
            let opcaoFiltro8 = entrada.receberTexto(`Por favor, escolha uma opção (P - Produto ou S - Serviço): `)
            if(opcaoFiltro8 == `P` || opcaoFiltro8 == `p`){
                new ListagemProdutos(empresa.produtos).listarProdutosMaisConsumidos(empresa.clientes);
            }
            else if(opcaoFiltro8 == `S` || opcaoFiltro8 == `s`){
                new ListagemServicos(empresa.servicos).listarServicosMaisConsumidos(empresa.clientes);
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}