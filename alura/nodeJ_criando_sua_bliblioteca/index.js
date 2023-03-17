import fs from 'fs';
import chalk from "chalk";


function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não é arquivo no diretorio PORRAAA'));
}

function pegarArquivo(caminhoArquivo){

     const encoding = 'utf-8';
     fs.promises.readFile(caminhoArquivo, encoding)
     .then((texo) => chalk.green(console.log(texo)))
     .catch((erro) => trataErro(erro))

}  


/* function pegarArquivo(caminhoArquivo){
    
    
    fs.readFile(caminhoArquivo,  (erro, retorno) => {

        if(erro){
            trataErro(erro);
        }

        console.log(chalk.green(retorno));
    })

} */

pegarArquivo('./arquivos/texto.md');