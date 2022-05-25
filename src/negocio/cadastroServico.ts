import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServicos extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do Servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Servico: `)
        let servico = new Servico(this.servicos.length, nome);
        this.servicos.push(servico);
    }

}