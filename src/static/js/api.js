const apiKeyYoutube = 'AIzaSyDrmGIJgrDOZMT-USZOHhM2IdxkUWNwGGM'
const apiIdChannelYoutube = 'UCfhJhcy7L2FwCGiXfXLuq2w'

let movie = new Array()
async function videoAll() {
    //let resp = await axios.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKeyYoutube + '&part=snippet,id&channelId=' + apiIdChannelYoutube)

    //Teste
    movie = [
        {
            'thumbnails': 'https://i.ytimg.com/vi/F3QuLTth6tY/hqdefault.jpg',
            'title': 'Olhos de Boneca',
            'videoId': 'F3QuLTth6tY',
            'description': 'Muitas bonecas são usadas como canal para algum tipo de ritual, como o vodu, feitos para atingir outra pessoa. Neste curta-metragem, uma moça ...',
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/ke8X3SE0XE8/hqdefault.jpg',
            'title': 'Mulheres Rio Acima',
            'videoId': 'ke8X3SE0XE8',
            'description': 'O documentário que traz para a tela histórias de mulheres militantes de Ribeirão Preto, como a da enfermeira e uma das líderes das Forças Armadas ...',
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/DrzWKWeg_PI/hqdefault.jpg',
            'title': 'Ouvidores de Vozes',
            'videoId': 'DrzWKWeg_PI',
            'description': 'Isabel, Reginaldo e Marlene escutam vozes e têm seu dia a dia retratado no documentário Ouvidores de Vozes. Vencedor do Pitching Doc Futura de ...',
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/rlZs5K6cDfI/hqdefault.jpg',
            'title': '13 Pétalas',
            'videoId': 'rlZs5K6cDfI',
            'description': 'Uma flor misteriosa é deixada na porta de um homem que vive sozinho em uma casa afastada da cidade grande. O tal homem apenas coloca a ...',
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/7t5Jo9dAODM/hqdefault.jpg',
            'title': 'Olhos Acebolados',
            'videoId': '7t5Jo9dAODM',
            'description': 'O curta acompanha a personagem Ana (Luciana Rossi), com sua rotina de dona de casa, seus sonhos interrompidos e revelações. Baseado na obra ...',
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/5vudaM5Neek/hqdefault.jpg',
            'title': 'Patrícia',
            'videoId': '5vudaM5Neek',
            'description': 'As contradições de uma profissional do sexo que luta para ser vista com respeito, busca sua individualidade, sabedoria e autoconhecimento.',
        },
    ]

    // resp.data.items.forEach((element, index) => {
    //     if (!(index == 0 && element.snippet.title == 'ALTFLIX Brasil')) {
    //         movie.push({
    //             'thumbnails': element.snippet.thumbnails.high.url,
    //             'title': element.snippet.title,
    //             'videoId': element.id.videoId,
    //             'description': element.snippet.description.replace('SINOPSE', ''),
    //         })
    //     }
    // })
}

async function videoSearch(id) {
    let resp = await axios.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKeyYoutube + '&part=snippet&id=' + id).catch(err => console.log(err))

    let description = resp.data.items[0].snippet.description.split("\n")
    let moreInformations = description[3].split('|')
    let technicalTeam = resp.data.items[0].snippet.description.substring(resp.data.items[0].snippet.description.indexOf('EQUIPE TÉCNICA')).split('\n')

    let moviePlay = {
        'title': resp.data.items[0].snippet.title,
        'description': description[1],
        'duration': moreInformations[0].trim().split(' ')[1],
        'year': moreInformations[2].trim().split(' ')[1],
        'type': moreInformations[1].trim(),
        'technicalTeam': technicalTeam,
    }

    return moviePlay
}

function sendEmail(body) {
    Email.send({
       Host: "smtp.gmail.com",
       Username: "altflix.squard2@gmail.com",
       Password: "sbfx$2ud",
       To: 'altflix.squard2@gmail.com',
       From: "altflix.squard2@gmail.com",
       Subject: "Pedido de Filme!",
       Body: body,
    }).then(
       message => console.log(message)
    );
}