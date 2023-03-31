import fs from 'fs';
import chalk from "chalk";

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).';

function extraiLinks(texto){
    
    const regex = /\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm;
    const linksExtraidos = texto.match(regex);

    console.log(linksExtraidos);
}

extraiLinks9(texto);

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não é arquivo no diretorio PORRAAA'));
}

//async e await

 async function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8';
    try{

        const texo = await fs.promises.readFile(caminhoArquivo, encoding)
    
        console.log(chalk.green(texo))
    }catch(erro){

        trataErro(erro)

    }   
    
}

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


//pegarArquivo('./arquivos/texto.md');