/* função para aparecer um input quando selecionado outro no select */
let static = 0
function doSomething() {
   let divOculta = document.querySelector(".div-oculta")
   divOculta.classList.remove('div-oculta')
   divOculta.classList.add('div-no-oculta')

   static ++

}

/* Pegando as infos do form*/

let informacoesForm = document.querySelectorAll(".input-info")
let btnEnviar = document.querySelector('#enviar')


btnEnviar.addEventListener("click", function enviar() {
   let informacoes = []


   for (let i = 0; i < informacoesForm.length; i++) {
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


   let escolhaGenero = document.querySelector("#genero").value
   if (escolhaGenero.length > 0) {
      informacoesForm.genero = escolhaGenero
   }
   console.log()


   /***************** VALIDAÇÂO ************************/

   let error = []
   validacao(informacaoFilme)

   function validacao(form) {
      
      /*nome validação*/
      if (form.nome.length == 0) {
         document.querySelector("#nome").classList.add("small")
         error.push('erro')
      }
      else document.querySelector("#nome").classList.remove("small")
         
      /*email validação*/
      let emailSearch = form.email.search("@")
      if (emailSearch == -1 || form.email.length < 7) {
         document.querySelector("#email").classList.add("small")
         error.push('erro')
      }
      else document.querySelector("#email").classList.remove("small")

      /* validação email */
      const isValidPhone = (phone) => {
         const sanitizedPhone = phone.replace(/\D/g,'');
         return sanitizedPhone.length >= 10 && sanitizedPhone.length <= 11;
       };
      if (!isValidPhone(form.tel)) {
         document.querySelector("#tel").classList.add("small")
         error.push('erro')
      } else document.querySelector("#tel").classList.remove("small")

      /* validação select */
      if (form.genero == '' || form.genero == 'Selecione') {
         document.querySelector("#selectOculto").classList.add("small")
         error.push('erro')
      } else document.querySelector("#selectOculto").classList.remove("small")

      /*validação titulo*/
      if (form.titulo.length == 0) {
         document.querySelector("#titulo-oculto").classList.add("small")
         error.push('erro')
      }
      else document.querySelector("#titulo-oculto").classList.remove("small")

       /*validação data de lançamento*/
       if (form.dataLancamento.length == 0) {
         document.querySelector("#data-oculto").classList.add("small")
         error.push('erro')
      }
      else document.querySelector("#data-oculto").classList.remove("small")

   }

   if (error.length != 0) {
      return
   } 
   else {
      document.write('ok')
   }


});


