import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    public clientes: Array<Cliente> = []
    public produtos: Array<Produto> = []
    public servicos: Array<Servico> = []
    
}