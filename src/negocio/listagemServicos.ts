import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de serviços:`);
        console.log(`Id\tNome`);
        console.log(`--------------------------------------`);
        this.servicos.forEach(servico => {
            console.log(servico.id + `\t` + servico.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarServicosMaisConsumidos(clientes: Array<Cliente>): Array<Servico>{
        let servicosMaisConsumidos: Array<Servico> = [];
        this.servicos.forEach(produto => {
            servicosMaisConsumidos.push(produto);
        })

        servicosMaisConsumidos.forEach(s => {
            let quantidadeConsumida = 0;
            clientes.forEach(cliente => {
                cliente.servicosConsumidos.forEach(servicoConsumido => {
                    if(servicoConsumido.id == s.id){
                        quantidadeConsumida = quantidadeConsumida + 1;
                    }
                })
            })
            s.quantidadeConsumida = quantidadeConsumida;
        })

        servicosMaisConsumidos.sort((s1, s2) => (s1.quantidadeConsumida > s2.quantidadeConsumida) ? -1 : 1)
        console.log(`\nServiços mais consumidos: `);
        let ordem = 1;
        servicosMaisConsumidos.forEach(s => {
            console.log(ordem+ `º Nome do Serviço: `+ s.nome +   `\tQuantidade Consumida: `+ s.quantidadeConsumida);
            ordem++;
        });
        console.log(`--------------------------------------------------------------`);
        return servicosMaisConsumidos;
    }
}