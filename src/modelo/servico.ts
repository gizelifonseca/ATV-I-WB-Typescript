export default class Servico {
    public id: number
    public nome!: string
    public quantidadeConsumida: number;

    constructor(id: number, nome: string){
        this.id = id
        this.nome = nome;
        this.quantidadeConsumida = 0;
    }
}