import Empresa from "../modelo/empresa"
const { writeFileSync } = require('fs');

const path = './empresa.json';


export default class FileUtil{

    public static gravarEmpresa(empresa: Empresa){
        try {
            writeFileSync(path, JSON.stringify(empresa, null, 2), 'utf8');
            console.log('Data successfully saved to disk');
          } catch (error) {
            console.log('An error has occurred ', error);
          }
    }

    public static carregarEmpresa(): Empresa{
        const { readFileSync } = require('fs');
        try{
            const data = readFileSync(path);
            const json = JSON.parse(data);
            
            return json;
        }
        catch(error){
            return new Empresa();
        }
    }

}
