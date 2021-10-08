const db = require('../connections/connections')
db.connect()

function insertGenres(genre) {

    db.query(`insert into genres(genre) values ('${genre}')`, (err, res) => {
        if (err) throw err
        // console.log(res)
    })
}



function insertArtist({ name, popularity, followers, genres }) {

    db.query(`insert into artist(artist_name, popularity, followers) values ('${name}', ${popularity}, ${followers})`, (err, res) => {
        if (err) throw err
        // console.log(res)
    })
    
    genres.forEach(genre => {
        db.query(`insert into artist_genres(id_artist, id_genres) values ((select id from artist a where a.artist_name = '${name}'), (select id from genres g where g.genre = '${genre}') )`, (err, res) => {
            if (err) throw err
            // console.log(res);
        })
    });
}



function insertMk(mk) {

    db.query(`insert into mk(mk) values ('${mk}')`, (err, res) => {
        if (err) throw err
        // console.log(res);
    })
}


function insertTrack({ track, url, artist }) { 

    db.query(`insert into track(id_artist, track, url) values ((select id from artist a where a.artist_name = '${artist}'), '${track}', '${url}')`, (err, res) => {
        if (err) throw err
        // console.log(res);
    })
}

function insertTops({ track, mk, position, streams, artistName, url }) { 

    db.query(`
    insert into 
    tops_spotfy(id_track, id_mk, position_on_tops, streams) 
    values (
        (select 
            t.id
            from 
            track t
            inner join artist a on t.id_artist = a.id 
            where 
            t.track = '${track}' and a.artist_name = '${artistName}' and t.url = '${url}'), 
        (select id from mk m where m.mk = '${mk}'), 
        ${position}, 
        ${streams}
        )`, 
        
        (err, res) => {
        if (err) throw err
        // console.log(res);
    })
}


const modules = {
    insertGenres,
    insertArtist,
    insertMk,
    insertTrack,
    insertTops
}

module.exports = modules