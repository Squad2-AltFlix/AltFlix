let email_body = new Object()

//Teste
email_body = {
   'Nome': 'teste',
   'Email': 'email@gmail.com',
   'Telefone': '19 99999999',
   'Nome da Produtora': 'alguma ai',
   'Título do Filme': 'um lugar',
   'Classificação': '12',
   'Genêro': 'Ação',
   'Data de Lançamento': '15/09/2017',
   'URL do Filme': 'filme.com',
   'Sinopse': 'Sem Remorso é um filme americano de ação lançado em 2021, baseado na série publicada por Tom Clancy em 1993, um spin-off da série de filmes do Jack Ryan.',
}

getScreenFormNum = (screen_num) => {
   window.scrollTo(0,0)

   animationInput = () => {
      document.querySelectorAll(".input-div").forEach(item => {
         item.addEventListener('input', () => {
            let label = item.childNodes[4]
            label.classList.add("input-animacao")
         })
      })
   }

   loadInputAnimation = () => {
      $('.input-div > label').addClass('input-animacao')
   }

   if (screen_num == 1) {
      new Vue({
         el: '.form',
         data: {
            name: email_body['Nome'],
            email: email_body['Email'],
            phone: email_body['Telefone'],
         },
         methods: {
            nextScreen() {
               let is_next = this.validate_name(this.name) + this.validate_email(this.email) + this.validate_phone(this.phone)

               if (is_next == 3) {
                  email_body = Object.assign(email_body, {
                     'Nome': this.name,
                     'Email': this.email,
                     'Telefone': this.phone,
                  })
                  getScreenFormNum(2)
               }
            },
            validate_name(name) {
               try {
                  let nameConfig = /^[a-z ,.'-]+$/i

                  if (nameConfig.test(name) && name.length >= 3) {
                     $('#nome').removeClass('div-small')
                     return true
                  }
                  else {
                     $('#nome').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#nome').addClass('div-small')
                  return false
               }
            },
            validate_email(email) {
               try {
                  let emailConfig = /\S+@\S+\.\S+/

                  if (emailConfig.test(email)) {
                     $('#email').removeClass('div-small')
                     return true
                  }
                  else {
                     $('#email').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#email').addClass('div-small')
                  return false
               }
            },
            validate_phone(phone) {
               try {
                  let phoneConfig = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

                  if (phoneConfig.test(phone)) {
                     $('#tel').removeClass('div-small')
                     return true
                  }
                  else {
                     $('#tel').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#tel').addClass('div-small')
                  return false
               }
            },
         },
         mounted: function () {
            try {
               if (this.name.length >= 3) {
                  loadInputAnimation()
               }
            } catch (error) {
               animationInput()
            }
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

               <div class="wrapper wrapper-btn">
                  <button type="button" class="btn btn-nav right" v-on:click="nextScreen">Próxima</button>
               </div>

            </div>
         `,
      })
   }

   else if (screen_num == 2) {
      new Vue({
         el: '.form',
         data: {
            producer_name: email_body['Nome da Produtora'],
            movie_title: email_body['Título do Filme'],
            rank: email_body['Classificação'],
         },
         methods: {
            backScreen() {
               getScreenFormNum(1)
            },
            nextScreen() {
               let is_next = this.validate_movieTitle(this.movie_title)

               if (is_next == 1) {
                  email_body = Object.assign(email_body, {
                     'Nome da Produtora': this.producer_name,
                     'Título do Filme': this.movie_title,
                     'Classificação': this.rank,
                  })
                  getScreenFormNum(3)
               }
            },
            validate_movieTitle(movie_title) {
               try {
                  let movieConfig = /^[a-z ,.'-]+$/i

                  if (movieConfig.test(movie_title) && movie_title.length >= 3) {
                     $('#titulo').removeClass('div-small')
                     return true
                  }
                  else {
                     $('#titulo').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#titulo').addClass('div-small')
                  return false
               }
            },
         },        
         mounted: function () {
            try {
               if (this.movie_title.length >= 3) {
                  loadInputAnimation()
               }
            } catch (error) {
               animationInput()
            }
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
               
               <div class="wrapper wrapper-btn">
                  <button type="button" class="btn btn-nav left" v-on:click="backScreen">Anterior</button>
                  <button type="button" class="btn btn-nav right" v-on:click="nextScreen">Próxima</button>
               </div>

            </div>
         `,
      })
   }

   else if (screen_num == 3) {
      let data

      try {
         data = email_body['Data de Lançamento'].split('/')
         data = `${data[2]}-${data[1]}-${data[0]}`
      } catch (error) {
         data = ""
      }

      new Vue({
         el: '.form',
         data: {
            type: email_body['Genêro'],
            year: data,
            url_movie: email_body['URL do Filme'],
            description: email_body['Sinopse'],
         },
         methods: {
            backScreen() {
               getScreenFormNum(2)
            },
            nextScreen() {
               let is_next = this.validate_type(this.type) + this.validate_year(this.year) + this.validate_url(this.url_movie) + this.validate_description(this.description)

               data = this.year.split('-')

               if (is_next == 4) {
                  email_body = Object.assign(email_body, {
                     'Genêro': this.type,
                     'Data de Lançamento': `${data[2]}/${data[1]}/${data[0]}`,
                     'URL do Filme': this.url_movie,
                     'Sinopse': this.description,
                  })
                  getScreenFormNum(4)
               }
            },
            effectSelect() {
               if ($(".selecaofilme option:selected").val() == 'outro') {
                  $('.div-oculta').addClass('div-no-oculta')
                  this.type = ''
               }

               else {
                  $('.div-oculta').removeClass('div-no-oculta')

                  if (this.type != $(".selecaofilme option:selected").val() && this.type != 'Selecione') {
                     this.type = $(".selecaofilme option:selected").val()
                  }
                  
               }
            },
            validate_type(type) {
               try {
                  let typeConfig = /[a-z ,.'-]+$/i

                  if (typeConfig.test(type) && type.length >= 3) {
                     $('#selectOculto').removeClass('div-small')
                     return true
                  }
                  else {
                     $('#selectOculto').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#selectOculto').addClass('div-small')
                  return false
               }
            },
            validate_year(year) {
               try {
                  if (year != '') {
                     $('#data-oculto').removeClass('div-small')
                     return true
                  }
                  else {
                     $('#data-oculto').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#data-oculto').addClass('div-small')
                  return false
               }
            },
            validate_url(url) {
               try {
                  let urlConfig = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

                  if (urlConfig.test(url)) {
                     $('#url-oculto').removeClass('div-small')
                     return true
                  }
                  else {
                     $('#url-oculto').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#url-oculto').addClass('div-small')
                  return false
               }
            },
            validate_description(description) {
               try {
                  if (description.length >= 100) {
                     $('#sinopse-oculto').removeClass('div-small')
                     return true
                  } else {
                     $('#sinopse-oculto').addClass('div-small')
                     return false
                  }
               } catch (error) {
                  $('#sinopse-oculto').addClass('div-small')
                  return false
               }
            },
            loadSelect(value) {
               $(".selecaofilme").find("option[value=" + value + "]").attr("selected", true);
            },
         },
         mounted: function () {
            try {
               if (this.type.length >= 3 && this.type != '') {
                  this.loadSelect(this.type)
                  loadInputAnimation()
               }
            } catch (error) {
               animationInput()
            }
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

               <div class="wrapper wrapper-btn">
                  <button type="button" class="btn btn-nav left" v-on:click="backScreen">Anterior</button>
                  <button type="button" class="btn btn-nav right" v-on:click="nextScreen">Próxima</button>
               </div>

            </div>
         `,
      })
   }

   else if (screen_num == 4) {
      new Vue({
         el: '.form',
         methods: {
            callScreenHome() {
               $('#content').children().attr("id", 'home')
               window.scrollTo(0,0)
               getScreenHome()
            },
            cancelForm() {
               email_body = new Object()
               this.callScreenHome()
            },
            editForm() {
               getScreenFormNum(1)
            },
            confirmForm() {
               let text = "<h2>Dados do Formulário - Altflix</h2><br />"

               for (const key in email_body) {
                  const element = email_body[key]

                  if(element != undefined) {
                     text += `
                           <strong style="font-size: 14pt">${key}:</strong>
                              <br />
                           <span style="font-size: 11pt">${email_body[key]}</span>
                           <br /><br />
                        `
                  }
               }

               sendEmail(text)
               this.callScreenHome()
            },
            loadInputs() {
               for (const key in email_body) {
                  const element = email_body[key]

                  if (key == 'Sinopse') {
                     $('.form .content').append(`
                        <div class="wrapper data">
                           <label for="disabledTextInput" class="form-label">${key}:</label>
                           <textarea for="disabledTextInput" class="form-label" disabled>${element}</textarea>                           
                        </div>
                     `)
                  }
                  else if (element != undefined) {
                     $('.form .content').append(`
                        <div class="wrapper data">
                           <label for="disabledTextInput" class="form-label">${key}:</label>
                           <input type="text" id="disabledTextInput" class="form-control" placeholder="${element}" disabled />
                        </div>
                     `)
                  }
               }

               $('.titulo').html('Confirme seus Dados')
            },
         },
         mounted: function () {            
            try {
               this.loadInputs()
               if (this.url.length >= 3) {
                  loadInputAnimation()
               }
            } catch (error) {
               animationInput()
            }
         },
         template: `
            <div class="form">

               <div class="content"></div>

               <div class="wrapper wrapper-btn btn">
                  <button type="button" class="btn cancel" v-on:click="cancelForm">Cancelar</button>
                  <button type="button" class="btn edit" v-on:click="editForm">Editar</button>
                  <button type="button" class="btn confirm" v-on:click="confirmForm">Confirmar</button>
               </div>

            </div>
         `,
      })
   }
}