let btnEnviar = document.querySelector('#enviar')

let informacoes = []
let informacoesForm = document.querySelectorAll(".input-info")

let outro = document.querySelector("#outro")
outro.addEventListener("click", function(){
  // let divOculta = document.getElementsByClassName("div-oculta")
   console.log('divOculta')
   alert("ok")
   // divOculta.classList.remove("div-oculta")
})

btnEnviar.addEventListener("click", function(){

     for (let i=0; i < informacoesForm.length; i++) {
        informacoes.push(informacoesForm[i].value)
     }  
     let select = document.querySelector("select").value

     const informacaoFilme = {
        nome: informacoes[0],
        email: informacoes[1],
        tel: informacoes[2],
        produtora: informacoes[3],
        titulo: informacoes[4],
        dataDeLancamento: informacoes[5],
        lancamento: informacoes[6],
        temporadasEpisodios: informacoes[7],
        distribuidora: informacoes[8],
        festivais: informacoes[9],
        genêro: select,
        sinopse: informacoes[10]
        

     }
     console.log(informacaoFilme)
});


