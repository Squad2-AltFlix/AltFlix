/* função para aparecer um input quando selecionado outro no select */
function doSomething() {
   let selectValue = document.querySelector('select')
   var divOculta = document.querySelector(".div-oculta")

   if (selectValue.value == "outro") {
     divOculta.classList.add('div-no-oculta')
   }
   else {
   divOculta.classList.remove('div-no-oculta')
   }
}
/* Animação do form */

const informacoesForm = document.querySelectorAll(".input-info")

document.querySelectorAll(".input-div").forEach(item => {
   item.addEventListener('input', function() {
      let label = item.childNodes[5]
      label.classList.add("input-animacao")
   })
 })
 
/* Pegando as infos do form*/

let btnEnviar = document.querySelector('#enviar')
btnEnviar.addEventListener("click", function enviar(event) {

   let informacoes = []

   for (let i = 0; i < informacoesForm.length; i++) {
      informacoes.push(informacoesForm[i].value)
   }

   let select = document.querySelector("select").value
   let lancamento = document.querySelector('#filme-data').value
   console.log (informacoes)
   const informacaoFilme = {
      nome: informacoes[0],
      email: informacoes[1],
      tel: informacoes[2],
      produtora: informacoes[3],
      titulo: informacoes[4],
      classificaoIndicativa: informacoes[5],
      duracao: informacoes[6],
      genero: select,
      dataLancamento: lancamento,
      url: informacoes[7],
      sinopse: informacoes[8]
   }

   let escolhaGenero = document.querySelector("#genero").value
   if (escolhaGenero.length > 0) {
      informacoesForm.genero = escolhaGenero
   }
   console.log(informacaoFilme)
   /***************** VALIDAÇÂO ************************/

   let error = []
   validacao(informacaoFilme)

   function validacao(form) {

      /*nome validação*/
      if (form.nome.length == 0) {
         document.querySelector("#nome").classList.add("div-small")
         error.push('erro')
      }
      else document.querySelector("#nome").classList.remove("div-small")

      /*email validação*/
      let emailSearch = form.email.search("@")
      if (emailSearch == -1 || form.email.length < 7) {
         document.querySelector("#email").classList.add("div-small")
         form.email = ''
         error.push('erro')
      }
      else document.querySelector("#email").classList.remove("div-small")


      /* validação telefone */
      const isValidPhone = (phone) => {
         const sanitizedPhone = phone.replace(/\D/g, '');
         return sanitizedPhone.length >= 10 && sanitizedPhone.length <= 11;
      };
      if (!isValidPhone(form.tel)) {
         document.querySelector("#tel").classList.add("div-small")
         error.push('erro')
      } else document.querySelector("#tel").classList.remove("div-small")


      /* validação select */
      if (form.genero == '' || form.genero == 'Selecione') {
         document.querySelector("#selectOculto").classList.add("div-small")
         error.push('erro')
      } else document.querySelector("#selectOculto").classList.remove("div-small")

      /*validação titulo*/
      if (form.titulo.length == 0) {
         document.querySelector("#titulo-oculto").classList.add("div-small")
         error.push('erro')
      }
      else document.querySelector("#titulo-oculto").classList.remove("div-small")

      /*validação data de lançamento*/
      if (form.dataLancamento.length == 0) {
         document.querySelector("#data-oculto").classList.add("div-small")
         error.push('erro')
      }
      else document.querySelector("#data-oculto").classList.remove("div-small")


      /* Validação URL */
      if (form.url.length == 0) {
         document.querySelector("#url-oculto").classList.add("div-small")
         error.push('erro')
      }
      else document.querySelector("#url-oculto").classList.remove("div-small")

      /*validação sinopse*/
      if (form.sinopse.length < 100) {
         document.querySelector("#sinopse-oculto").classList.add("div-small")
         error.push('erro')
      }

      /* validação checkbox*/
      // let checkbox = document.querySelector("#termo-de-solitacao")
      // if (!checkbox.checked) {
      //    document.querySelector("#checkbox-oculto").classList.add("div-small")
      //    error.push('erro')
      //    return
      // }
   }

   if (error.length != 0) {
      console.log(error)
      event.preventDefault()
   }
   else {
      document.write('ok')
   }

});