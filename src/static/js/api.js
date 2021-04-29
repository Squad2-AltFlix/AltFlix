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
//IKzlry6Gt7Y

async function videoSearch(id) {
    await axios.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKeyYoutube + '&part=snippet&id=' + id)
        .then((response) => {
            console.log(response); //all data
            console.log(response.data.items[0].snippet.title);
            console.log(response.data.items[0].snippet.description);
            //console.log(response.data.items[0].snippet.publishedAt);
            let publ = response.data.items[0].snippet.publishedAt.substring(0, response.data.items[0].snippet.publishedAt.indexOf('T')).split('-')
            console.log(`${publ[2]}/${publ[1]}/${publ[0]}`);
            console.log(response.data.items[0].snippet.thumbnails.high.url);
            //src in youtube https://www.youtube.com/embed/ + id in funtion
        })
        .catch((err) => {console.log(err);})
}
// videoSearch('IKzlry6Gt7Y')

async function sendEmail() {
    await axios.post('https://api.staticforms.xyz/submit' + $("#staticform").serialize())
    .then((response) => {
            console.log(response);
    })
    .catch((err) => {console.log(err);})
}