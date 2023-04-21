import fs from 'fs';
import chalk from "chalk";


function extraiLinks(texto){
    
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

    const ArrayResultados = [];
    let temp
    
    while((temp = regex.exec(texto)) !== null){

        ArrayResultados.push({ [temp[1]]: temp[2] });

    }
    
    return (ArrayResultados);   
}




function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, '  Não é arquivo no diretorio PORRAAA'));
}   

//async e await

 async function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8';
    try{

        const texo = await fs.promises.readFile(caminhoArquivo, encoding)
    
        console.log(extraiLinks(texo));  
    }catch(erro){

        trataErro(erro)

    }   
    
}

pegaArquivo('./arquivos/texto.md');

// function pegarArquivo(caminhoArquivo){

//      const encoding = 'utf-8';
//      fs.promises.readFile(caminhoArquivo, encoding)
//      .then((texo) => chalk.green(console.log(texo)))
//      .catch((erro) => trataErro(erro))

// }  


/* function pegarArquivo(caminhoArquivo){
    
    
    fs.readFile(caminhoArquivo,  (erro, retorno) => {

        if(erro){
            trataErro(erro);
        }

        console.log(chalk.green(retorno));
    })

} */


