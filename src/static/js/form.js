screenForm = (screen_num) => {
   window.scrollTo(0, 0)

   if (screen_num == 1) { 
      new Vue({
         el: '.form',
         template: `
            <div class="form">

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="name" class="input-info" autocomplete="off">
                     <div class="underline"></div>
                     <label>Nome<span> *</span></label>
                     <small hidden id="nome">Nome Obrigatório</small>
                  </div>
               </div>
               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="email" class="input-info" autocomplete="off">
                     <div class="underline"></div>
                     <label>Email<span> *</span></label>
                     <small hidden id="email">Email Obrigatório</small>
                  </div>
               </div>
   
               <div class="wrapper">
                  <div class="input-div">
                     <input type="tel" name="phone" class="input-info" autocomplete="off">
                     <div class="underline"></div>
                     <label>Telefone<span> *</span></label>
                     <small hidden id="tel">Telefone Obrigatório</small>
                  </div>                  
               </div>

               <button type="button" class="btn btn-outline-primary right" onclick="screenForm(2)"><i class="fas fa-arrow-right"></i></button>               
            </div>
         `,
      })
   }

   else if (screen_num == 2) { 
      new Vue({
         el: '.form',
         template: `
            <div class="form">
   
               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="produtora" class="input-info" autocomplete="off">
                     <div class="underline"></div>
                     <label>Nome da Produtora</label>
                  </div>
               </div>
   
               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="titulo" class="input-info" autocomplete="off">
                     <div class="underline"></div>
                     <label>Título do Filme<span> *</span></label>
                     <small hidden id="titulo-oculto">Título Obrigatório</small>
                  </div>
               </div>
   
               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" id="classificacao-indicativa" name="classificacao-indicativa"
                           class="input-info" autocomplete="off">
                     <div class="underline"></div>
                     <label>Classificação</label>
                  </div>
               </div>
   
               <button type="button" class="btn btn-outline-primary left" onclick="screenForm(1)"><i class="fas fa-arrow-left"></i></button>
               <button type="button" class="btn btn-outline-primary right" onclick="screenForm(3)"><i class="fas fa-arrow-right"></i></button>
            </div>
         `,
      })
   }

   else if (screen_num == 3) {
      new Vue({
         el: '.form',
         template: `
            <div class="form">
   
               <div class="wrapper">
                  <label id="data-label" for="filme-data">Genêro<span> *</span></label>
                  <br />                        
                  <select class="selecaofilme" onchange="doSomething()">
                     <option>Selecione</option>
                     <option value="Ação">Ação</option>
                     <option value="Aventura">Aventura</option>
                     <option value="Cinema de arte">Cinema de arte</option>
                     <option value="Comédia">Comédia</option>
                     <option value="Comédia romântica">Comédia romântica</option>
                     <option value="Dança">Dança</option>
                     <option value="Documentário">Documentário</option>
                     <option value="Docuficção">Docuficção</option>
                     <option value="Drama">Drama</option>
                     <option value="Espionagem">Espionagem</option>
                     <option value="Faroeste">Faroeste</option>
                     <option value="Fantasia">Fantasia</option>
                     <option value="Ficção científica">Ficção científica</option>
                     <option value="Filmes de guerra">Filmes de guerra</option>
                     <option value="Musical">Musical</option>
                     <option value="Policial">Policial</option>
                     <option value="Romance">Romance</option>
                     <option value="Seriado">Seriado</option>
                     <option value="Suspense">Suspense</option>
                     <option value="Terror">Terror</option>
                     <option value="Thriller">Thriller</option>
                     <option value="outro" id="outro">Outro</option>
                  </select>
                  <small hidden id="selectOculto">Genêro Obrigatório</small>
               </div>
   
               <div class="wrapper div-oculta">
                  <div class="input-div">                            
                     <input type="text" id="genero" name="genero" autocomplete="off">
                     <div class="underline"></div>
                     <label>Digite o Gênero:</label>
                  </div>
               </div>
   
               <div class="caixa-filmedata">
                  <label id="data-label" for="filme-data">Data de Lançamento<span> *</span></label>
                  <input class="filme-data" type="date" id="filme-data" name="filme-data" autocomplete="off">
                  <small hidden id="data-oculto">Data de Lançamento Obrigatório</small>
               </div>
   
               <br />
   
               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="url" class="input-info" autocomplete="off">
                     <div class="underline"></div>
                     <label>URL do Vídeo<span> *</span></label>
                     <small hidden id="url-oculto">URL do Filme Obrigatório</small>
                  </div>
               </div>
   
               <div class="wrapper">
                  <textarea name="sinopse" id="sinopse" autocomplete="off" class="input-info"
                     placeholder="Sinópse do Filme"></textarea>
                  <small hidden id="sinopse-oculto">Escreva no mínimo 100 caracteres</small>
               </div>

                  <button type="button" class="btn btn-outline-primary left" onclick="screenForm(2)"><i class="fas fa-arrow-left"></i></button>
                  <button type="button" class="btn btn-outline-primary right" onclick="screenForm(4)"><i class="fas fa-arrow-right"></i></button>
               </div>
            </div>
         `,
      })
   }
   // <input type="submit" id="enviar" value="Enviar Formulário">

   else if (screen_num == 4) {
      console.log("Tela de confirmação dos dados");
   }
}
screenForm(1)

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
   item.addEventListener('input', function () {
      let label = item.childNodes[5]
      label.classList.add("input-animacao")
   })
})

/* Pegando as infos do form*/

let btnEnviar = document.querySelector('#enviar')
btnEnviar.addEventListener("click", function enviar(event) {
   event.preventDefault()
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
   const formString = JSON.stringify(informacaoFilme)
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

   } else

      Email.send({
         Host: "smtp.gmail.com",
         Username: "altflix.squard2@gmail.com",
         Password: "sbfx$2ud",
         To: 'altflix.squard2@gmail.com',
         From: "altflix.squard2@gmail.com",
         Subject: "This is the subject",
         Body: `${formString}`
      }).then(
         message => alert(message)
      );


   // else { 
   //    // fetch('https://api.staticforms.xyz/submit', {
   //    fetch('https://api.staticforms.co/submit?form=anOf2b', {
   //       method: 'POST',
   //       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
   //       body: JSON.stringify({ "email": document.getElementsByName("email").value })

   //    })
   //       .then(response => {
   //          console.log(response);
   //          if (response.status == 200) {
   //             alert('ok')
   //          } else {
   //            alert('deu ruim')
   //          }
   //       })
   //       .catch(error => {
   //          console.log(error)
   //          message.innerHTML = "<div><h2>Oops. Something went wrong!</h2></div>";
   //          formContainer.parentNode.replaceChild(message, formContainer);
   //       })
   //   }  
});