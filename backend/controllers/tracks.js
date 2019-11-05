const jwt = require('jsonwebtoken');
const tracksRouter = require('express').Router();
const Track = require('../models/Track');
const Album = require('../models/Album');
const Artist = require('../models/Artist');
const Report_Track = require('../models/Report_Track');
const db = require('../config/database');

const getTokenFrom = req => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

// get one track
tracksRouter.get('/:id', async (req, res, next) => {
  try {
    // see if token is valid
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }
    const track = await db.query(
      `SELECT t.name as track_title, ar.name as artist, al.name as album, t.id as track_id,
    al.id as album_id, ar.id as artist_id, t.label as label, al.identifier as cat_id, t.length, t.side as disc_no,
    t.track_no, t.people, t.isrc, al.year, t.comment, t.record_country, t.country
    FROM playlist__artist as ar, playlist__album as al, playlist__track as t
    WHERE t.id = ${req.params.id}
    and t.album_id = al.id
    and t.artist_id = ar.id`,
      {
        type: db.QueryTypes.SELECT
      }
    );
    if (track) {
      console.log('tracksrouter log', track);
      res.json(track);
    } else {
      res.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

// save track and add it to current report
tracksRouter.post('/', async (req, res, next) => {
  try {
    // see if token is valid
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }

    // destructure values from req.body
    let {
      track_title,
      artist_name,
      album_name,
      label,
      cat_id,
      year,
      disc_no,
      track_no,
      length,
      country,
      record_country,
      people,
      comment,
      isrc,
      report_id,
      user_id,
      sortable_rank
    } = req.body;

    // tähän if no report id -> then just add track, no report-track

    // see if artist exists
    const artist = await Artist.findOne({ where: { name: artist_name } });
    // uudet artistit crashaa siihen et ao id

    if (!artist) {
      // create new artist
      const newArtist = await Artist.create({
        name: artist_name
      });
      console.log('created new artist', newArtist);
      // create new album
      const newAlbum = await Album.create({
        name: album_name,
        artist_id: newArtist.id,
        identifier: cat_id,
        label: label,
        year: year
      });
      console.log('created new album', newAlbum);

      // create new track
      const newTrack = await Track.create({
        artist_id: newArtist.id,
        album_id: newAlbum.id,
        identifier: cat_id,
        label,
        name: track_title,
        disc_no,
        track_no,
        length,
        country,
        record_country,
        people,
        comment,
        user_id,
        isrc
      });
      console.log('created new track', newTrack);

      // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
      const newReportTrack = await Report_Track.create({
        track_id: newTrack.id,
        report_id,
        length: newTrack.length,
        sortable_rank
      });
      const trackToReturn = {
        id: newTrack.id,
        artist_id: newTrack.artist_id,
        album_id: newTrack.album_id,
        track_title: newTrack.name,
        artist_name,
        album_name,
        label,
        cat_id,
        year,
        disc_no,
        track_no,
        length,
        country: newTrack.country,
        record_country,
        sortable_rank,
        people: newTrack.people,
        comment,
        isrc,
        report_id,
        report_track_id: newReportTrack.id,
        user_id: newTrack.user_id,
        spotify_id: newTrack.spotify_id
      };
      console.log('adding to report track', newReportTrack);
      console.log('track to return', trackToReturn);
      res.status(201).json(trackToReturn);
    } else if (artist) {
      // see if album exists
      const album = await Album.findOne({
        where: { artist_id: artist.id, name: album_name }
      });
      if (!album) {
        // create new album
        const newAlbum = await Album.create({
          name: album_name,
          artist_id: artist.id,
          identifier: cat_id,
          label: label,
          year: year
        });
        console.log('created new album', newAlbum);

        // create new track
        const newTrack = await Track.create({
          artist_id: artist.id,
          album_id: newAlbum.id,
          identifier: cat_id,
          label,
          name: track_title,
          disc_no,
          track_no,
          length,
          country,
          record_country,
          people,
          comment,
          isrc,
          user_id
        });
        console.log('created new track', newTrack);

        // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
        const newReportTrack = await Report_Track.create({
          track_id: newTrack.id,
          report_id,
          length: newTrack.length,
          sortable_rank
        });
        console.log('created new report-track', newReportTrack);
        const trackToReturn = {
          id: newTrack.id,
          artist_id: newTrack.artist_id,
          album_id: newTrack.album_id,
          track_title: newTrack.name,
          artist_name,
          album_name,
          label,
          cat_id,
          year,
          disc_no,
          track_no,
          length,
          country: newTrack.country,
          record_country,
          sortable_rank,
          people: newTrack.people,
          comment,
          isrc,
          report_id,
          report_track_id: newReportTrack.id,
          user_id: newTrack.user_id,
          spotify_id: newTrack.spotify_id
        };
        console.log('track to return', trackToReturn);
        res.status(201).json(trackToReturn);
      } else {
        // see if track exists
        const track = await Track.findOne({
          where: { artist_id: artist.id, album_id: album.id, name: track_title }
        });

        if (track) {
          // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
          const newReportTrack = await Report_Track.create({
            track_id: track.id,
            report_id,
            length: track.length,
            sortable_rank
          });
          console.log('created new report track', newReportTrack);

          const trackToReturn = {
            id: track.id,
            artist_id: track.artist_id,
            album_id: track.album_id,
            track_title: track.name,
            artist_name,
            album_name,
            label,
            cat_id,
            year,
            disc_no,
            track_no,
            length,
            country: track.country,
            record_country,
            sortable_rank,
            people: track.people,
            comment,
            isrc,
            report_id,
            report_track_id: newReportTrack.id,
            user_id: track.user_id,
            spotify_id: track.spotify_id
          };
          console.log('track to return', trackToReturn);
          return res.status(200).json(trackToReturn);
        }

        // create new track
        const newTrack = await Track.create({
          artist_id: artist.id,
          album_id: album.id,
          identifier: cat_id,
          label,
          name: track_title,
          disc_no,
          track_no,
          length,
          country,
          record_country,
          people,
          comment,
          user_id,
          isrc
        });
        console.log('created new track', newTrack);

        // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
        const newReportTrack = await Report_Track.create({
          track_id: newTrack.id,
          report_id,
          length: newTrack.length,
          sortable_rank
        });

        console.log('new report-track', newReportTrack);
        const trackToReturn = {
          id: newTrack.id,
          artist_id: newTrack.artist_id,
          album_id: newTrack.album_id,
          track_title: newTrack.name,
          artist_name,
          album_name,
          label,
          cat_id,
          year,
          disc_no,
          track_no,
          length,
          country: newTrack.country,
          record_country,
          sortable_rank,
          people: newTrack.people,
          comment,
          isrc,
          report_id,
          report_track_id: newReportTrack.id,
          user_id: newTrack.user_id,
          spotify_id: newTrack.spotify_id
        };
        console.log('track to return', trackToReturn);
        res.status(201).json(trackToReturn);
      }
    }
  } catch (exception) {
    next(exception);
  }
});

// check & add djonline tracks array
tracksRouter.post('/djonline', async (req, res, next) => {
  try {
    // see if token is valid
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }

    // destructure values from req.body
    let {
      track_title,
      artist_name,
      album_name,
      label,
      cat_id,
      year,
      disc_no,
      track_no,
      length,
      country,
      record_country,
      sortable_rank,
      people,
      comment,
      isrc,
      report_id
    } = req.body;

    // see if artist name ends with , the
    let lastFive = artist_name.slice(artist_name.length - 5);
    if (lastFive.toLowerCase() === ', the') {
      artist_name = artist_name.substring(0, artist_name.length - 5);
      artist_name = 'THE ' + artist_name.toUpperCase();
    } else {
      artist_name = artist_name.toUpperCase();
    }

    // see if artist exists
    const artist = await Artist.findOne({ where: { name: artist_name } });
    // uudet artistit crashaa siihen et ao id

    if (!artist) {
      // create new artist
      const newArtist = await Artist.create({
        name: artist_name
      });
      console.log('created new artist', newArtist);
      // create new album
      const newAlbum = await Album.create({
        name: album_name,
        artist_id: newArtist.id,
        identifier: cat_id,
        label: label,
        year: year
      });
      console.log('created new album', newAlbum);

      // create new track
      const newTrack = await Track.create({
        artist_id: newArtist.id,
        album_id: newAlbum.id,
        identifier: cat_id,
        label,
        name: track_title,
        disc_no,
        track_no,
        length,
        country,
        record_country,
        people,
        comment,
        isrc
      });
      console.log('created new track', newTrack);

      // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
      const newReportTrack = await Report_Track.create({
        track_id: newTrack.id,
        report_id,
        length: newTrack.length,
        sortable_rank
      });
      const trackToReturn = {
        id: newTrack.id,
        artist_id: newTrack.artist_id,
        album_id: newTrack.album_id,
        track_title: newTrack.name,
        artist_name,
        album_name,
        label,
        cat_id,
        year,
        disc_no,
        track_no,
        length,
        country: newTrack.country,
        record_country,
        sortable_rank,
        people: newTrack.people,
        comment,
        isrc,
        report_id,
        report_track_id: newReportTrack.id,
        user_id: newTrack.user_id,
        spotify_id: newTrack.spotify_id
      };
      console.log('adding to report track', newReportTrack);
      console.log('track to return', trackToReturn);
      res.status(201).json(trackToReturn);
    } else if (artist) {
      // see if album exists
      const album = await Album.findOne({
        where: { artist_id: artist.id, name: album_name }
      });
      if (!album) {
        // create new album
        const newAlbum = await Album.create({
          name: album_name,
          artist_id: artist.id,
          identifier: cat_id,
          label: label,
          year: year
        });
        console.log('created new album', newAlbum);

        // create new track
        const newTrack = await Track.create({
          artist_id: artist.id,
          album_id: newAlbum.id,
          identifier: cat_id,
          label,
          name: track_title,
          disc_no,
          track_no,
          length,
          country,
          record_country,
          people,
          comment,
          isrc
        });
        console.log('created new track', newTrack);

        // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
        const newReportTrack = await Report_Track.create({
          track_id: newTrack.id,
          report_id,
          length: newTrack.length,
          sortable_rank
        });
        console.log('created new report-track', newReportTrack);
        const trackToReturn = {
          id: newTrack.id,
          artist_id: newTrack.artist_id,
          album_id: newTrack.album_id,
          track_title: newTrack.name,
          artist_name,
          album_name,
          label,
          cat_id,
          year,
          disc_no,
          track_no,
          length,
          country: newTrack.country,
          record_country,
          sortable_rank,
          people: newTrack.people,
          comment,
          isrc,
          report_id,
          report_track_id: newReportTrack.id,
          user_id: newTrack.user_id,
          spotify_id: newTrack.spotify_id
        };
        console.log('track to return', trackToReturn);
        res.status(201).json(trackToReturn);
      } else {
        // see if track exists
        const track = await Track.findOne({
          where: { artist_id: artist.id, album_id: album.id, name: track_title }
        });

        if (track) {
          // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
          const newReportTrack = await Report_Track.create({
            track_id: track.id,
            report_id,
            length: track.length,
            sortable_rank
          });
          console.log('created new report track', newReportTrack);

          const trackToReturn = {
            id: track.id,
            artist_id: track.artist_id,
            album_id: track.album_id,
            track_title: track.name,
            artist_name,
            album_name,
            label,
            cat_id,
            year,
            disc_no,
            track_no,
            length,
            country: track.country,
            record_country,
            sortable_rank,
            people: track.people,
            comment,
            isrc,
            report_id,
            report_track_id: newReportTrack.id,
            user_id: track.user_id,
            spotify_id: track.spotify_id
          };
          console.log('track to return', trackToReturn);
          return res.status(200).json(trackToReturn);
        }

        // create new track
        const newTrack = await Track.create({
          artist_id: artist.id,
          album_id: album.id,
          identifier: cat_id,
          label,
          name: track_title,
          disc_no,
          track_no,
          length,
          country,
          record_country,
          people,
          comment,
          isrc
        });
        console.log('created new track', newTrack);

        // täs kohtaa lisää biisi report-träkkiin raportti-idn kans
        const newReportTrack = await Report_Track.create({
          track_id: newTrack.id,
          report_id,
          length: newTrack.length,
          sortable_rank
        });

        console.log('new report-track', newReportTrack);
        const trackToReturn = {
          id: newTrack.id,
          artist_id: newTrack.artist_id,
          album_id: newTrack.album_id,
          track_title: newTrack.name,
          artist_name,
          album_name,
          label,
          cat_id,
          year,
          disc_no,
          track_no,
          length,
          country: newTrack.country,
          record_country,
          sortable_rank,
          people: newTrack.people,
          comment,
          isrc,
          report_id,
          report_track_id: newReportTrack.id,
          user_id: newTrack.user_id,
          spotify_id: newTrack.spotify_id
        };
        console.log('track to return', trackToReturn);
        res.status(201).json(trackToReturn);
      }
    }
  } catch (exception) {
    next(exception);
  }
});

module.exports = tracksRouter;
