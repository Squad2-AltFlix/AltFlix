let email_body = new Object()

//Teste
animationLabel = () => {
   document.querySelectorAll(".input-div").forEach(item => {
      item.addEventListener('input', function () {
         let label = item.childNodes[4]
         label.classList.add("input-animacao")
      })
   })
}

screenForm = (screen_num) => {
   window.scrollTo(0, 0)

   if (screen_num == 1) {
      new Vue({
         el: '.form',
         data: {
            name: '',
            email: '',
            phone: '',
         },
         methods: {
            nextScreen() {
               screenForm(2)
               // if(this.validate_name(this.name) && this.validate_email(this.email) && this.validate_phone(this.phone)) {
               //    // console.log('passou');
               //    email_body = Object.assign(email_body, {
               //       'name': this.name,
               //       'email': this.email,
               //       'phone': this.phone,
               //    })
               //    // console.log(email_body);
               //    screenForm(2)
               // }
               // else { 
               //    console.log('nao passou');
               //    console.log(email_body);
               // }
               console.log(this.name, this.validate_name(this.name))
               console.log(this.email, this.validate_email(this.email))
               console.log(this.phone, this.validate_phone(this.phone))
            },
            validate_name(name) {
               let nameConfig = /[^a-zà-ú]/gi

               if (!nameConfig.test(name) && name.length >= 3) {
                  document.querySelector("#nome").classList.remove("div-small")
                  return true
               }
               else {
                  document.querySelector("#nome").classList.add("div-small")
                  return false
               }
            },
            validate_email(email) {
               let emailConfig = /\S+@\S+\.\S+/

               if (emailConfig.test(email)) {
                  document.querySelector("#email").classList.remove("div-small")
                  return true
               }
               else {
                  document.querySelector("#email").classList.add("div-small")
                  return false
               }
            },
            validate_phone(phone) {
               let phoneConfig = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

               if (phoneConfig.test(phone)) {
                  document.querySelector("#tel").classList.remove("div-small")
                  return true
               }
               else {
                  document.querySelector("#tel").classList.add("div-small")
                  return false
               }
            },
         },
         template: `
            <div class="form">

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="name" class="input-info" autocomplete="off" v-model="name" />
                     <div class="underline"></div>
                     <label>Nome<span> *</span></label>
                     <small hidden id="nome">Nome Obrigatório</small>
                  </div>
               </div>

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="email" class="input-info" autocomplete="off" v-model="email" />
                     <div class="underline"></div>
                     <label>Email<span> *</span></label>
                     <small hidden id="email">Email Obrigatório</small>
                  </div>
               </div>
   
               <div class="wrapper">
                  <div class="input-div">
                     <input type="tel" name="phone" class="input-info" autocomplete="off" v-model="phone" />
                     <div class="underline"></div>
                     <label>Telefone<span> *</span></label>
                     <small hidden id="tel">Telefone Obrigatório</small>
                  </div>                  
               </div>

               <button type="button" class="btn btn-outline-primary right" v-on:click="nextScreen"><i class="fas fa-arrow-right"></i></button>
            </div>
         `,
      })
   }

   else if (screen_num == 2) {
      new Vue({
         el: '.form',
         data: {
            producer_name: '',
            movie_title: '',
            rank: '',
         },
         methods: {
            backScreen() {
               // $('input[name="name"]').val() = email_body.name
               // $('input[name="email"]').val() = email_body.email
               // $('input[name="phone"]').val() = email_body.phone

               screenForm(1)
            },
            nextScreen() {
               screenForm(3)
               // console.log(this.producer_name);
               // console.log(this.movie_title);
               // console.log(this.rank);
               console.log(this.validate_movieTitle(this.movie_title));
               if (this.validate_movieTitle(this.movie_title)) {
                  console.log('passou');
                  // screenForm(3)
               }
               else {
                  console.log('nao passou');
               }
            },
            validate_movieTitle(movie_title) {
               let movieConfig = /[^a-zà-ú]/gi

               if (!movieConfig.test(movie_title) && movie_title.length >= 3) {
                  document.querySelector("#titulo").classList.remove("div-small")
                  return true
               }
               else {
                  document.querySelector("#titulo").classList.add("div-small")
                  return false
               }
            },
         },
         template: `
            <div class="form">

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="produtora" class="input-info" autocomplete="off" v-model="producer_name" />
                     <div class="underline"></div>
                     <label>Nome da Produtora</label>
                  </div>
               </div>

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="titulo" class="input-info" autocomplete="off" v-model="movie_title" />
                     <div class="underline"></div>
                     <label>Título do Filme<span> *</span></label>
                     <small hidden id="titulo-oculto">Título Obrigatório</small>
                  </div>
               </div>

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" id="classificacao-indicativa" name="classificacao-indicativa"
                           class="input-info" autocomplete="off" v-model="rank" />
                     <div class="underline"></div>
                     <label>Classificação</label>
                  </div>
               </div>
               
               <button type="button" class="btn btn-outline-primary left" v-on:click="backScreen"><i class="fas fa-arrow-left"></i></button>
               <button type="button" class="btn btn-outline-primary right" v-on:click="nextScreen"><i class="fas fa-arrow-right"></i></button>
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
         `,
      })
   }
   // <input type="submit" id="enviar" value="Enviar Formulário">

   else if (screen_num == 4) {
      console.log("Tela de confirmação dos dados");
   }

   animationLabel()
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
// animationLabel = () => {
//    document.querySelectorAll(".input-div").forEach(item => {
//       item.addEventListener('input', function () {
//          let label = item.childNodes[4]
//          label.classList.add("input-animacao")
//       })
//    })
// }


/* Pegando as infos do form*/
// const informacoesForm = document.querySelectorAll(".input-info")

// let btnEnviar = document.querySelector('#enviar')
// btnEnviar.addEventListener("click", function enviar(event) {
//    event.preventDefault()
//    let informacoes = []

//    for (let i = 0; i < informacoesForm.length; i++) {
//       informacoes.push(informacoesForm[i].value)
//    }

//    let select = document.querySelector("select").value
//    let lancamento = document.querySelector('#filme-data').value


//    const informacaoFilme = {
//       nome: informacoes[0],
//       email: informacoes[1],
//       tel: informacoes[2],
//       produtora: informacoes[3],
//       titulo: informacoes[4],
//       classificaoIndicativa: informacoes[5],
//       duracao: informacoes[6],
//       genero: select,
//       dataLancamento: lancamento,
//       url: informacoes[7],
//       sinopse: informacoes[8]
//    }

//    let escolhaGenero = document.querySelector("#genero").value
//    if (escolhaGenero.length > 0) {
//       informacoesForm.genero = escolhaGenero
//    }
//    const formString = JSON.stringify(informacaoFilme)
//    /***************** VALIDAÇÂO ************************/

//    let error = []
//    validacao(informacaoFilme)

//    function validacao(form) {

//       /*nome validação*/
//       if (form.nome.length == 0) {
//          document.querySelector("#nome").classList.add("div-small")
//          error.push('erro')
//       }
//       else document.querySelector("#nome").classList.remove("div-small")

//       /*email validação*/
//       let emailSearch = form.email.search("@")
//       if (emailSearch == -1 || form.email.length < 7) {
//          document.querySelector("#email").classList.add("div-small")
//          form.email = ''
//          error.push('erro')
//       }
//       else document.querySelector("#email").classList.remove("div-small")


//       /* validação telefone */
//       const isValidPhone = (phone) => {
//          const sanitizedPhone = phone.replace(/\D/g, '');
//          return sanitizedPhone.length >= 10 && sanitizedPhone.length <= 11;
//       };
//       if (!isValidPhone(form.tel)) {
//          document.querySelector("#tel").classList.add("div-small")
//          error.push('erro')
//       } else document.querySelector("#tel").classList.remove("div-small")


//       /* validação select */
//       if (form.genero == '' || form.genero == 'Selecione') {
//          document.querySelector("#selectOculto").classList.add("div-small")
//          error.push('erro')
//       } else document.querySelector("#selectOculto").classList.remove("div-small")

//       /*validação titulo*/
//       if (form.titulo.length == 0) {
//          document.querySelector("#titulo-oculto").classList.add("div-small")
//          error.push('erro')
//       }
//       else document.querySelector("#titulo-oculto").classList.remove("div-small")

//       /*validação data de lançamento*/
//       if (form.dataLancamento.length == 0) {
//          document.querySelector("#data-oculto").classList.add("div-small")
//          error.push('erro')
//       }
//       else document.querySelector("#data-oculto").classList.remove("div-small")


//       /* Validação URL */
//       if (form.url.length == 0) {
//          document.querySelector("#url-oculto").classList.add("div-small")
//          error.push('erro')
//       }
//       else document.querySelector("#url-oculto").classList.remove("div-small")

//       /*validação sinopse*/
//       if (form.sinopse.length < 100) {
//          document.querySelector("#sinopse-oculto").classList.add("div-small")
//          error.push('erro')
//       }

//       /* validação checkbox*/
//       // let checkbox = document.querySelector("#termo-de-solitacao")
//       // if (!checkbox.checked) {
//       //    document.querySelector("#checkbox-oculto").classList.add("div-small")
//       //    error.push('erro')
//       //    return
//       // }
//    }

//    if (error.length != 0) {
//       console.log(error)

//    } else

//       Email.send({
//          Host: "smtp.gmail.com",
//          Username: "altflix.squard2@gmail.com",
//          Password: "sbfx$2ud",
//          To: 'altflix.squard2@gmail.com',
//          From: "altflix.squard2@gmail.com",
//          Subject: "This is the subject",
//          Body: `${formString}`
//       }).then(
//          message => alert(message)
//       );


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
// });