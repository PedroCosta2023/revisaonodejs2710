//importar o fs
//criar os metodos para salvar o user
const { error } = require("console")
const fs = require("fs")

//classe com construtor que cria o nosso arquivo
//usamos o module.exports

//este repositorio sera usado para cirar os metodos comuns
module.exports = class Repository{
    //verificar se recebo o nome do arquivo
    constructor(filename){
        if(!filename){
            throw new Error('O nome do arquivo é obrigatório')
        }
        //atributo da classe
        this.filename = filename;
        try {
            fs.accessSync(this.filename)
        } catch (error) {
            fs.writeFileSync(this.filename, "[]")
        }
    }

    async getAll(){
        return JSON.parse(await fs.promises.readFile(this.filename))
    }

    async create (atributos){
        //ler todos os dados que tem no arquivo
        const records = await this.getAll();
        //os dados são uma lista, então add os dados na lista
        records.push(atributos);
        //escreve os dados
        await this.writeAll(records);
    }
    
    async writeAll(records){
        await fs.promises.writeFile(this.filename, JSON.stringify(records))
    }
}