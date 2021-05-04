getScreenHome = () => {
    new Vue({
        el: "#home",
        template: `
            <main id="main-container">
                <section class="intro">
                    <h1><span class="span">Olá!</span> Qual será o filme de hoje?</h1>
                    <input type="search" name="search" placeholder="Procure um filme" id="search-field" onkeyup="movieSearch(this, event)">
                </section>        
                <section class="movies">
                    <div class="swiper-container">
                        <div class="swiper-wrapper"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </section>
            </main>
        `,
    })

    movieHome()
    document.body.style.background = '#632565'
}

getScreenForm = () => {
    new Vue({
        el: "#form",
        template: `
            <div id="form"></div>
        `,
    })   
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


// getScreenMovie = () => {
//     new Vue({
//         el: "#movie",
//         template: `
//         <section class="tela">
//             <h2 class="titulo"></h2>
//             <div class="playersinopse">
//             <div class="player">
//                 <div class="wrapper">
//                 </div>
//             </div>        
//                 <div class="sinopse"></div>
//             </div>
//             <div class="dygproducao">
//                 <div class="dyg"></div>
//                 <div class="producao"></div>
//             </div>
//         </section>
//         `,
//     })

//     document.body.style.background = 'rgb(36, 35, 35)'
// }

getScreenAbout = () => {
    new Vue({
        el: "#about",
            template: `
            <section class="card">
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

    document.body.style.backgroundImage = 'url("/src/static/images/bgteste2.jpeg")'
    document.body.style.backgroundRepeat = 'repeat-y'
    document.body.style.backgroundSize = 'cover'
}