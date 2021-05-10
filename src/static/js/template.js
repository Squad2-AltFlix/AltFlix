getHeader = () => {
    new Vue({
        el: "#navbar",
        template: `
            <header id="navbar">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <a href="#home" onclick="screenNew(this)" class="navbar-brand">
                            <img src="static/images/logo.png" alt="Logo AltFlix" id="logo-img" />
                        </a>
                    </div>
                    <div class="container-fluid justify-content-end">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav d-flex justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link" href="#home" onclick="screenNew(this)">Início</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about" onclick="screenNew(this)">Sobre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#form" onclick="screenNew(this)">Cadastre seu filme</a>
                                </li>
                            </ul>
                            <div class="input-group mb-3 d-flex search">
                                <input type="text" name="search" class="form-control" placeholder="Procure um Filme" aria-label="Procure um Filme" aria-describedby="basic-addon1" onkeyup="movieSearch(event)" />
                                <span class="input-group-text" id="basic-addon1" onclick="movieSearch(event)"><i class="fas fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        `,
    })
}

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
                <section class="banner-img"></section>

                <section class="catalogue">
                    <h1>Nossos Filmes</h1>
                    <div class="swiper-container swiper2">
                        <div class="swiper-wrapper"></div>

                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
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
                    alt="${movie[bannerTop[index]].title}" class="movie-pic"  
                    id="${movie[bannerTop[index]].videoId}" onclick="moviePlay(this)"
                    />
                </div>
                <span class="swiper-span">
                    <p><a id="${movie[bannerTop[index]].videoId}" onclick="moviePlay(this)">${movie[bannerTop[index]].title}</a></p>
                    <p class="synopsis">${movie[bannerTop[index]].description}</p>
                </span>
            </div>
        `)
        // <p class="synopsis">${movie[bannerTop[index]].description()}</p> Oficial

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
            <div class="swiper-slide movie-item"><img src="${movie[index].thumbnails}" alt="${movie[index].title}" id="${movie[index].videoId}" onclick="moviePlay(this)" /></div>
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
        el: "#home",
        template: `
        <main id="home" class="main-container" style="background-color: #1b1b1b;">
                <div class="movie-card">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${img}" alt="${title}">
                        <div class="card-body">
                            <h2 class="card-title">${title}</h2>
                            <a id="${id}" onclick="moviePlay(this)">Assistir</a>
                        </div>
                    </div>
                </div>
            </main>
        `,
    })
}

getScreenForm = () => {
    new Vue({
        el: "#form",
        template: `
            <main id="form-screen">
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
            <section class="cartao">
                <div class="sobre">
                <h2>Sobre</h2>
                <p>
                    ALTFLIX é um projeto voltado para pessoas que amam
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
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGef4UZy_fWiQ/profile-displayphoto-shrink_200_200/0/1613365943785?e=1626307200&v=beta&t=5T2Q31RHi2BgApumZhO3YfrVcHL6DJkQWBJ62A6r2zw" />
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