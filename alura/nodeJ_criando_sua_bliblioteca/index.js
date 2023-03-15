import fs from 'fs';
import chalk from "chalk";


function trataErro(erro){

    throw new Error(erro);
}

function pegarArquivo(caminhoArquivo){
    
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo, encoding, (erro, retorno) => {

        if(erro){
            trataErro(erro);
        }

        console.log(chalk.green(retorno));
    })

}

pegarArquivo('./arquivos/texto.md');