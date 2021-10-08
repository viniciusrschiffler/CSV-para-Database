const fs = require('fs')
const csv = require('fast-csv')

const { removeRepeatedItems, handleFormatData } = require('./src/modules/functionalities')
const { insertArtist, insertGenres, insertMk, insertTrack, insertTops } = require('./src/modules/inserts')

const genres = []
const mk = []
const artists = []
const track = []
const tops = []

let dataInterface = {}

console.time('register')
fs.createReadStream("./src/top200completo.csv",)
    .pipe(csv.parse({ headers: true }))
    .on("error", error => console.log(error))
    .on("data", data => {

        dataInterface = {
            artist: handleFormatData(data.artist),
            mk: data.mk,
            position: handleFormatData(data.position, 'number'),
            track: handleFormatData(data.track),
            streams: handleFormatData(data.streams, 'number'),
            url: handleFormatData(data.url),
            id: handleFormatData(data.id),
            popularity: handleFormatData(data.popularity, 'number'),
            followers: handleFormatData(data.followers, 'number'),
            genres: handleFormatData(data.genres, 'gender')
        }

        const currentGenresSplited = dataInterface.genres.split(',')
        genres.push(...currentGenresSplited)

        mk.push(dataInterface.mk)

        artists.push({
            name: dataInterface.artist,
            popularity: dataInterface.popularity,
            followers: dataInterface.followers,
            genres: dataInterface.genres == null ? null : dataInterface.genres.split(',')
        })

        track.push({
            track: dataInterface.track,
            url: dataInterface.url,
            artist: dataInterface.artist
        })

        tops.push({
            track: dataInterface.track,
            mk: dataInterface.mk,
            position: dataInterface.position,
            streams: dataInterface.streams,
            artistName: dataInterface.artist,
            url: dataInterface.url
        })

    })
    .on('end', () => {

        saveGenres()
        saveMk()
        saveArtists()
        saveTracks()
        saveTops()

        console.log("17,474 itens cadastrados com sucesso!!!");
        console.timeEnd('register')
    })

function saveGenres() {
    const fillteredGenres = removeRepeatedItems(genres)

    fillteredGenres.forEach(genre =>  insertGenres(genre) )
}

function saveMk() {
    const fillteredMk = removeRepeatedItems(mk)

    fillteredMk.forEach(mk => insertMk(mk))
}

function saveArtists() {
    const artistsAsJson = artists.map(item => JSON.stringify(item))
    const fillteredArtistsAsJson = removeRepeatedItems(artistsAsJson)
    const fillteredArtists = fillteredArtistsAsJson.map(item => JSON.parse(item))

    fillteredArtists.forEach(artist => insertArtist(artist))
}

function saveTracks() {
    const trackAsJson = track.map(item => JSON.stringify(item))
    const fillteredTrackAsJson = removeRepeatedItems(trackAsJson)
    const fillteredTrack = fillteredTrackAsJson.map(item => JSON.parse(item))

    fillteredTrack.forEach(track => insertTrack(track));
}

function saveTops() {
    tops.forEach(top => insertTops(top))
}