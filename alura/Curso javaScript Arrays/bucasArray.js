const sala = ['Bia', 'Viviana', 'Isabela', 'Vínicius'];

const medias = [10, 7, 9, 6]

let listaDenotas = [sala, medias];

const exbir = (nome) =>  {
    if(listaDenotas [0].includes(nome)){

        let indice = listaDenotas[0].indexOf(nome)

        return console.log(`${listaDenotas[0][indice]} sua media é ${listaDenotas[1][indice]}`);
    }else{
        return "Aluno não está no array";
    }
}


console.log(exbir("Junior"));