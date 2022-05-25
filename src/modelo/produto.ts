export default class Produto {
    public id: number
    public nome!: string
    public quantidadeConsumida: number = Number(0);

    constructor(id: number, nome: string){
        this.id = id
        this.nome = nome;
        this.quantidadeConsumida = Number(0);
    }

}