const apiKeyYoutube = 'AIzaSyBcjhgbZUYfZ7vOgwuYZMJVrVLaCKniNd4'
const apiIdChannelYoutube = 'UCfhJhcy7L2FwCGiXfXLuq2w'

async function videoAll() {
    await axios.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKeyYoutube + '&part=snippet,id&channelId=' + apiIdChannelYoutube)
        .then((response) => {
            $.each(response.data.items, (index, data) => {
                if(!(index == 0 && data.snippet.title == 'ALTFLIX Brasil')) {
                    console.log(data); //all data
                    console.log(data.snippet.title);
                    console.log(data.snippet.thumbnails.high.url);
                    console.log(data.id.videoId); //src in youtube https://www.youtube.com/embed/
                }
            });
        })
        .catch((err) => {console.log(err);})
}
// videoAll()

async function videoSearch(id) {
    await axios.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKeyYoutube + '&part=snippet&id=' + id)
        .then((response) => {
            // console.log(response);

            let description = response.data.items[0].snippet.description.split("\n")
            let moreInformations = description[3].split('|')
            let technicalTeam = response.data.items[0].snippet.description.substring(response.data.items[0].snippet.description.indexOf('EQUIPE TÉCNICA')).split('\n')

            const movieInformations = {
                title: response.data.items[0].snippet.title,
                description: description[1],
                duration: moreInformations[0].trim(),
                type: moreInformations[1].trim(),
                year: moreInformations[2].trim(),
                technicalTeam: technicalTeam,
            }

            return JSON.parse(movieInformations)
        })
        .catch((error) => {
            return error
        })
}

let x = videoSearch('ke8X3SE0XE8')
console.log(x);

async function sendEmail() {
    await axios.post('https://api.staticforms.xyz/submit' + $(".formulario").serialize())
        .then((response) => {
                console.log(response);
        })
        .catch((err) => {console.log(err);})
}