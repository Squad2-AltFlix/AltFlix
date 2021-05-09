getScreenHome = () => {
    new Vue({
        el: "#home",
        template: `
            <main id="home" class="main-container">
                <section class="movies">
                    <div class="swiper-container swiper1">
                        <div class="swiper-wrapper"></div>
                    </div>
                </section>

                <section class="catalogue">
                    <h1>Nossos Filmes</h1>
                    <div class="swiper-container swiper2">
                        <div class="swiper-wrapper"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                </section>
            </main>
        `,
    })

    let maxResultBanner = 3, bannerTop = [], numRandom = 0
    for (let index = 0; index < maxResultBanner; index++) {

        while (true) {
            numRandom = parseInt(Math.random() * movie.length)
            if(!bannerTop.includes(numRandom)) {
                bannerTop.push(numRandom)
                break
            }
        }

        $('.movies .swiper-wrapper').prepend(`
            <div class="swiper-slide">
                <div class="movie-container">
                    <img src="${movie[bannerTop[index]].thumbnails}"
                    alt="${movie[bannerTop[index]].title}" class="movie-pic" />
                </div>
                <span class="swiper-span">
                    <p><a class="${movie[bannerTop[index]].videoId}" onclick="moviePlay(this)">${movie[bannerTop[index]].title}</a></p>
                    <p class="synopsis">${movie[bannerTop[index]].description}</p>
                </span>
            </div>
        `)

        if (index >= maxResultBanner - 1) {
            new Swiper('.swiper1', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        }
    }

    for (let index = 0; index < movie.length; index++) {
        $('.catalogue .swiper-wrapper').prepend(`
            <div class="swiper-slide movie-item"><img src="${movie[index].thumbnails}" alt="${movie[index].title}" class="${movie[index].videoId}" onclick="moviePlay(this)" /></div>
        `)
        
        if(index == movie.length - 1) {
            new Swiper(".swiper2", {
                slidesPerView: 4,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1440: {
                        slidersPerView: 5,
                        spaceBetween: 10,
                    }
                }
            });
        }
    }

    homeSearch()
}

getScreenHomeSearch = (id, img, title) => {
    new Vue({
        el: ".catalogue",
        template: `
            <section class="catalogue">
                <div class="movie-card">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${img}" alt="${title}">
                        <div class="card-body">
                            <h2 class="card-title">${title}</h2>
                            <a class="${id}" onclick="moviePlay(this)">Assistir</a>
                        </div>
                    </div>
                </div>
            </section>
        `,
    })
}

getScreenForm = () => {
    new Vue({
        el: "#form",
        template: `
            <main id="form">
                <section class="container">
                    <form class="formulario" type="submit" method="POST">
                        <h1 class="titulo">Queremos seu filme no nosso site!</h1>
                        <div class="wrapper-semtitulo">
                            <div class="form"></div>
                        </div>
                    </form>
                </section>
            </main>
        `,
    })
    getScreenFormNum(1)

    document.body.style.backgroundImage = 'url("static/images/wallpaper.jpg")'
    document.body.style.backgroundRepeat = 'repeat-y'
    document.body.style.backgroundSize = 'cover'
}

// teste
getScreenMovie = () => {
    new Vue({
        el: "#movie",
        template: `
        <section class="tela">
            <h2 class="titulo">Mulheres Rio Acima</h2>
            <div class="playersinopse">
            <div class="player">
                <div class="wrapper">
                <iframe
                    src="https://www.youtube.com/embed/ke8X3SE0XE8"
                    class="embed"
                    title="Filme"
                    allowfullscreen="true"
                ></iframe>
                </div>
            </div>        
                <div class="sinopse">
                    <h2>
                    &nbsp;&nbsp;&nbsp;O documentário que traz para a tela histórias de
                    mulheres militantes de Ribeirão Preto, como a da enfermeira e uma
                    das líderes das Forças Armadas de Libertação Nacional, Áurea
                    Moretti, que foi perseguida e torturada durante a ditadura militar;
                    Dilma Bicalho, outra militante da época da ditadura; Sílvia Diogo,
                    da ONG Casa da Mulher e Regina Brito, da ONG Vitória Régia.
                    Produzido durante o encontro de artes “Mulheres Rio Acima”,
                    realizado em maio pelo coletivo, o filme também mostra a cobertura
                    do evento, que tem como objetivo reunir e divulgar a arte feminista
                    da cidade, com imagens das apresentações e entrevistas com as
                    artistas e organizadoras do encontro.
                    </h2>
                </div>
            </div>
            <div class="dygproducao">
                <div class="dyg">
                    <h2 class="duration">4min43s</h2>
                    <h2 class="year">2020</h2>
                    <h2 class="genre">Terror</h2>
                </div>
                <div class="producao">
                    <h2>EQUIPE TÉCNICA</h2>
                    <h2>Roteiro e Direção: Milena Maganin, Raíza Ferreira</h2>
                    <h2>Direção de Fotografia, Montagem: Raíza Ferreira</h2>
                    <h2>Câmera, still e making of: Renata Prado</h2>
                    <h2>Produção: Coletivo Mulheres Rio Acima</h2>
                </div>
            </div>
        </section>
        `,
    })

    document.body.style.background = 'rgb(36, 35, 35)'
}

// getScreenMovie = (id, moviePlay) => {
//     new Vue({
//         el: "#movie",
//         template: `
//         <section class="tela">
//             <h2 class="titulo">${moviePlay.title}</h2>
//             <div class="playersinopse">
//                 <div class="player">
//                     <div class="wrapper">
//                         <iframe src="https://www.youtube.com/embed/${id}" class="embed" title="Filme" allowfullscreen="true"></iframe>
//                     </div>
//                 </div>
//                 <div class="sinopse">
//                     <h2>&nbsp;&nbsp;&nbsp;${moviePlay.description}</h2>
//                 </div>
//             </div>
//             <div class="dygproducao">
//                 <div class="dyg">
//                     <h2 class="duration">${moviePlay.duration}</h2>
//                     <h2 class="year">${moviePlay.year}</h2>
//                     <h2 class="genre">${moviePlay.type}</h2>
//                 </div>
//                 <div class="producao"></div>
//             </div>
//         </section>
//         `,
//     })

//     moviePlay.technicalTeam.forEach(element => {
//         $('.producao').append(`<h2>${element}</h2>`)
//     });

//     document.body.style.background = 'rgb(36, 35, 35)'
// }

getScreenAbout = () => {
    new Vue({
        el: "#about",
        template: `
            <section id="about" class="card">
                <div class="sobre">
                <h2>Sobre</h2>
                <p>
                    &nbsp;&nbsp;&nbsp; ALTFLIX é um projeto voltado para pessoas que amam
                    Cinema, tantos os que amam assistir, quanto os produtores
                    independentes que amam fazer acontecer. A idealizadora do projeto
                    Milena Maganin compartilhou esse sonho com 5 pessoas, Edson Primo,
                    Elisabete Alves, Felipe Pavan e Gustavo de Vito e Moares Oliveira para
                    tornar ele em realidade durante o Hackathon organizado pelo Grupo
                    FCamara.
                </p>
                </div>
                <div class="contact">
                <h2>Contate-nos</h2>
                <ul>
                    <li class="Edson">
                    Edson Primo&nbsp;&nbsp;&nbsp;
                    <div class="social">
                        <img src="https://unavatar.now.sh/github/edsonPrimo" />
                        <a target="_blank" href="https://www.linkedin.com/in/edson-primo-94904a209/"><i class="fab fa-linkedin-in"></i></a>
                        <a target="_blank" href="https://github.com/edsonPrimo"><i class="fab fa-github"></i></a>
                    </div>
                    </li>
                    <li class="Elisabete">
                    Elisabete Alves&nbsp;&nbsp;&nbsp;
                    <div class="social">
                        <img src="https://unavatar.now.sh/github/elisabetealves" />
                        <a target="_blank" href="https://www.linkedin.com/mwlite/in/elisabete-alves-675637135"><i class="fab fa-linkedin-in"></i></a>
                        <a target="_blank" href="https://github.com/elisabetealves"><i class="fab fa-github"></i></a>
                    </div>
                    </li>
                    <li class="Felipe">
                    Felipe Pavan&nbsp;&nbsp;&nbsp;
                    <div class="social">
                        <img src="https://unavatar.now.sh/github/FelipePavan13" />
                        <a
                        target="_blank"
                        href="https://www.linkedin.com/in/felipe-pavan-guedes-7659909a/"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        <a target="_blank" href="https://github.com/FelipePavan13"
                        ><i class="fab fa-github"></i
                        ></a>
                    </div>
                    </li>
                    <li class="Gustavo">
                    Gustavo de Vito&nbsp;&nbsp;&nbsp;
                    <div class="social">
                        <img src="https://unavatar.now.sh/github/GustavoDeVito" />
                        <a
                        target="_blank"
                        href="https://www.linkedin.com/in/gustavo-de-vito-70aa99206/"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        <a target="_blank" href="https://github.com/GustavoDeVito"
                        ><i class="fab fa-github"></i
                        ></a>
                    </div>
                    </li>
                    <li class="Milena">
                    Milena Maganin&nbsp;&nbsp;&nbsp;
                    <div class="social">
                        <img src="https://unavatar.now.sh/github/mimaganin" />
                        <a
                        target="_blank"
                        href="https://www.linkedin.com/in/milenamaganin/"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        <a target="_blank" href="https://github.com/mimaganin"
                        ><i class="fab fa-github"></i
                        ></a>
                    </div>
                    </li>
                    <li class="Moares">
                    Moares Oliveira&nbsp;&nbsp;&nbsp;
                    <div class="social">
                        <img src="https://unavatar.now.sh/github/MoaresOliveira" />
                        <a
                        target="_blank"
                        href="https://www.linkedin.com/in/moares-o-422393127/"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        <a target="_blank" href="https://github.com/MoaresOliveira"
                        ><i class="fab fa-github"></i
                        ></a>
                    </div>
                    </li>
                </ul>
                </div>
            </section>
        `,
    })

    document.body.style.backgroundImage = 'url("static/images/wallpaper.jpg")'
    document.body.style.backgroundRepeat = 'repeat-y'
    document.body.style.backgroundSize = 'cover'
}