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
               let is_next = this.validate_name(this.name) + this.validate_email(this.email) + this.validate_phone(this.phone)

               if(is_next == 3) {
                  email_body = Object.assign(email_body, {
                     'name': this.name,
                     'email': this.email,
                     'phone': this.phone,
                  })
                  screenForm(2)
               }
            },
            validate_name(name) {
               let nameConfig = /^[a-z ,.'-]+$/i

               if (nameConfig.test(name) && name.length >= 3) {
                  $('#nome').removeClass('div-small')
                  return true
               }
               else {
                  $('#nome').addClass('div-small')
                  return false
               }
            },
            validate_email(email) {
               let emailConfig = /\S+@\S+\.\S+/

               if (emailConfig.test(email)) {
                  $('#email').removeClass('div-small')
                  return true
               }
               else {
                  $('#email').addClass('div-small')
                  return false
               }
            },
            validate_phone(phone) {
               let phoneConfig = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

               if (phoneConfig.test(phone)) {
                  $('#tel').removeClass('div-small')
                  return true
               }
               else {
                  $('#tel').addClass('div-small')
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

               <div class="wrapper">
                  <button type="button" class="btn right" v-on:click="nextScreen">Próxima</button>
               </div>

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
               screenForm(1)
            },
            nextScreen() {
               let is_next = this.validate_movieTitle(this.movie_title)

               if (is_next == 1) {
                  email_body = Object.assign(email_body, {
                     'producer_name': this.producer_name,
                     'movie_title': this.movie_title,
                     'rank': this.rank,
                  })
                  screenForm(3)
               }
            },
            validate_movieTitle(movie_title) {
               let movieConfig = /^[a-z ,.'-]+$/i

               if (movieConfig.test(movie_title) && movie_title.length >= 3) {
                  $('#titulo').removeClass('div-small')
                  return true
               }
               else {
                  $('#titulo').addClass('div-small')
                  return false
               }
            },
         },
         template: `
            <div class="form">

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="titulo" class="input-info" autocomplete="off" v-model="movie_title" />
                     <div class="underline"></div>
                     <label>Título do Filme<span> *</span></label>
                     <small hidden id="titulo">Título Obrigatório</small>
                  </div>
               </div>

               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="produtora" class="input-info" autocomplete="off" v-model="producer_name" />
                     <div class="underline"></div>
                     <label>Nome da Produtora</label>
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
               
               <div class="wrapper">
                  <button type="button" class="btn left" v-on:click="backScreen">Anterior</button>
                  <button type="button" class="btn right" v-on:click="nextScreen">Próxima</button>
               </div>

            </div>
         `,
      })
   }

   else if (screen_num == 3) {
      new Vue({
         el: '.form',
         data: {
            type: '',
            year: '',
            url_movie: '',
            description: '',
         },
         methods: {
            backScreen() {
               screenForm(2)
            },
            nextScreen() {
               let is_next = this.validate_type(this.type) + this.validate_year(this.year) + this.validate_url(this.url_movie) + this.validate_description(this.description)

               if(is_next == 4) {
                  email_body = Object.assign(email_body, {
                     'type': this.type,
                     'year': this.year,
                     'url_movie': this.url_movie,
                     'description': this.description,
                  })
                  screenForm(4)
               }
            },
            effectSelect() {               
               if($(".selecaofilme option:selected").val() == 'outro') {
                  $('.div-oculta').addClass('div-no-oculta')
                  this.type = ''
               }

               else {
                  $('.div-oculta').removeClass('div-no-oculta')

                  if(this.type != $(".selecaofilme option:selected").val()) {
                     this.type = $(".selecaofilme option:selected").val()
                  }
               }
            },
            validate_type(type) {
               let typeConfig = /[a-z ,.'-]+$/i

               if (typeConfig.test(type) && type.length >= 3) {
                  $('#selectOculto').removeClass('div-small')
                  return true
               }
               else {
                  $('#selectOculto').addClass('div-small')
                  return false
               }
            },
            validate_year(year) {
               if(year != '') {
                  $('#data-oculto').removeClass('div-small')
                  return true
               }
               else {
                  $('#data-oculto').addClass('div-small')
                  return false
               }
            },
            validate_url(url) {
               let urlConfig = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

               if (urlConfig.test(url)) {
                  $('#url-oculto').removeClass('div-small')
                  return true
               }
               else {
                  $('#url-oculto').addClass('div-small')
                  return false
               }
            },
            validate_description(description) {
               if (description.length >= 100) {
                  $('#sinopse-oculto').removeClass('div-small')
                  return true
               } else {
                  $('#sinopse-oculto').addClass('div-small')
                  return false
               }
            },
         },
         template: `
            <div class="form">

               <div class="wrapper">
                  <label id="data-label" for="filme-data">Genêro<span> *</span></label>
                  <br />
                  <select class="selecaofilme" v-on:click="effectSelect">
                     <option>Selecione</option>
                     <option value="Ação">Ação</option>
                     <option value="Aventura">Aventura</option>
                     <option value="Cinema de Arte">Cinema de arte</option>
                     <option value="Comédia">Comédia</option>
                     <option value="Comédia Romântica">Comédia Romântica</option>
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
                     <input type="text" id="genero" name="genero" autocomplete="off" v-model="type" />
                     <div class="underline"></div>
                     <label>Digite o Gênero:</label>
                  </div>
               </div>
   
               <div class="wrapper caixa-filmedata">
                  <label id="data-label" for="filme-data">Data de Lançamento<span> *</span></label>
                  <input class="filme-data" type="date" id="filme-data" name="filme-data" autocomplete="off" v-model="year" />
                  <small hidden id="data-oculto">Data de Lançamento Obrigatório</small>
               </div>
      
               <div class="wrapper">
                  <div class="input-div">
                     <input type="text" name="url" class="input-info" autocomplete="off" v-model="url_movie" />
                     <div class="underline"></div>
                     <label>URL do Filme<span> *</span></label>
                     <small hidden id="url-oculto">URL do Filme Obrigatório</small>
                  </div>
               </div>
   
               <div class="wrapper">
                  <textarea name="sinopse" id="sinopse" autocomplete="off" class="input-info"
                     placeholder="Sinopse do Filme" v-model="description"></textarea>
                  <small hidden id="sinopse-oculto">Escreva no mínimo 100 caracteres</small>
               </div>

               <div class="wrapper">
                  <button type="button" class="btn left" v-on:click="backScreen">Anterior</button>
                  <button type="button" class="btn right" v-on:click="nextScreen">Próxima</button>
               </div>

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
screenForm(3)

// animationLabel = () => {
//    document.querySelectorAll(".input-div").forEach(item => {
//       item.addEventListener('input', function () {
//          let label = item.childNodes[4]
//          label.classList.add("input-animacao")
//       })
//    })
// }

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
