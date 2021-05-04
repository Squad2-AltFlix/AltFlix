// const apiKeyYoutube = 'AIzaSyDrmGIJgrDOZMT-USZOHhM2IdxkUWNwGGM' //project
const apiKeyYoutube = 'AIzaSyAQ9BLb23GbwOGS9QHIpfvjC63FThwRuUA'
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
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/ke8X3SE0XE8/hqdefault.jpg',
            'title': 'Mulheres Rio Acima',
            'videoId': 'ke8X3SE0XE8',
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/DrzWKWeg_PI/hqdefault.jpg',
            'title': 'Ouvidores de Vozes',
            'videoId': 'DrzWKWeg_PI',
        },
        {
            'thumbnails': 'https://i.ytimg.com/vi/rlZs5K6cDfI/hqdefault.jpg',
            'title': '13 Pétalas',
            'videoId': 'rlZs5K6cDfI',
        }
    ]

    // resp.data.items.forEach((element, index) => {
    //     if (!(index == 0 && element.snippet.title == 'ALTFLIX Brasil')) {
    //         movie.push({
    //             'thumbnails': element.snippet.thumbnails.high.url,
    //             'title': element.snippet.title,
    //             'videoId': element.id.videoId,
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