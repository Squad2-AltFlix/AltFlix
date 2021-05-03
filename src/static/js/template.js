getScreenHome = () => {
    new Vue({
        el: "#home",
        template: `
            <main id="main-container">
                <!-- Intro and Search Field -->
                <section class="intro">
                    <h1><span class="span">Olá!</span> Qual será o filme de hoje?</h1>
                    <input type="search" name="search" placeholder="Procure um filme" autocomplete="off" id="search-field">
                </section>        
                <!-- Carousel -->
                <section class="movies">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                                <img src="https://scontent.faqa1-1.fna.fbcdn.net/v/t1.18169-9/10487261_834618706556657_6192580130883943466_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_ohc=n2GuLRHiMJ0AX9mHocc&_nc_ht=scontent.faqa1-1.fna&oh=a477970261b3303278e0f4c809576125&oe=60AE37BD"
                                    alt="Cartaz Patrícia - O filme" class="movie-pic">
                                <span class="movie-title">
                                    <a href="#movie=5vudaM5Neek" onclick="moviePlay(this)">Patrícia</a>
                                </span>
                            </div>
                            <div class="swiper-slide">
                                <img src="https://scontent.faqa1-1.fna.fbcdn.net/v/t1.18169-9/10487261_834618706556657_6192580130883943466_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_ohc=n2GuLRHiMJ0AX9mHocc&_nc_ht=scontent.faqa1-1.fna&oh=a477970261b3303278e0f4c809576125&oe=60AE37BD"
                                    alt="Cartaz Patrícia - O filme" class="movie-pic">
                                <span class="movie-title">
                                    <a href="#movie=5vudaM5Neek" onclick="moviePlay(this)">Patrícia</a>
                                </span>
                            </div>

                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </section>
            </main>
        `,
    })

    new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // movie()
    document.body.style.background = '#632565'
}

getScreenForm = () => {
    new Vue({
        el: "#form",
        template: `
            <div id="home">
                <h1>Home</h1>
            </div>
        `,
    })   
}

getScreenMovie = () => {
    new Vue({
        el: "#movie",
        template: `
            <section class="tela">
                <!-- Titulo -->
                <h2 class="titulo">Mulheres Rio Acima</h2>
                
                <div class="playersinopse">
                <!-- Seção do Player -->
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
                <!-- Sinopse -->
        
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
            </section>
        `,
    })

    document.body.style.background = 'rgb(36, 35, 35)'
}

getScreenAbout = () => {
    new Vue({
        el: "#about",
        template: `
            <div id="home">
                <h1>Home</h1>
            </div>
        `,
    })   
}
