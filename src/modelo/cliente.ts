import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public id: number
    public nome: string
    public genero: string
    public nomeSocial: string
    public cpf: CPF
    public rgs: Array<RG>
    public dataCadastro: Date
    public telefones: Array<Telefone>
    public produtosConsumidos: Array<Produto>
    public servicosConsumidos: Array<Servico>

    constructor(id: number, nome: string, genero: string, nomeSocial: string, cpf: CPF, rg: RG, telefone: Telefone,
        produtosConsumidos: Array<Produto>, servicosConsumidos: Array<Servico>) {
        this.id = id
        this.nome = nome
        this.genero = genero
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = [rg]
        this.dataCadastro = new Date()
        this.telefones = [telefone]
        this.produtosConsumidos = produtosConsumidos
        this.servicosConsumidos = servicosConsumidos
    }
    public get getCpf(): CPF {
        return this.cpf
    }

    public set setCpf(cpf: CPF) {
        this.cpf = cpf;
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public set setRgs(rgs: Array<RG>){
        this.rgs = rgs;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
}