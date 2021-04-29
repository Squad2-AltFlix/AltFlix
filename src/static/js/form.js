let btnEnviar = document.querySelector('#enviar')

function doSomething() {
    let divOculta = document.querySelector(".div-oculta")
    divOculta.classList.remove('div-oculta')
    divOculta.classList.add('div-no-oculta')
    
}

/* Pegando as infos do form*/

let informacoes = []
let informacoesForm = document.querySelectorAll(".input-info")
btnEnviar.addEventListener("click", function(){

     for (let i=0; i < informacoesForm.length; i++) {
        informacoes.push(informacoesForm[i].value)
     }  
     
     let select = document.querySelector("select").value
     let lancamento = document.querySelector('#filme-data').value

     const informacaoFilme = {
        nome: informacoes[0],
        email: informacoes[1],
        tel: informacoes[2],
        produtora: informacoes[3],
        titulo: informacoes[4],
        classificacao: informacoes[5],
        temporadasEpisodios: informacoes[6],
        distribuidora: informacoes[7],
        festivais: informacoes[8],
        genero: select,
        dataLancamento: lancamento,
        sinopse: informacoes[9]
     }

     console.log(informacaoFilme.dataLancamento)

     let escolhaGenero = document.querySelector("#genero").value
     if (escolhaGenero.length > 0) {
        informacaoFilme.genero = escolhaGenero
     }
     console.log(informacaoFilme)
});


