const ErrorResponse = require('../utils/errorResponse');
const artistsRouter = require('express').Router();
const Artist = require('../models/Artist');
const db = require('../config/database');
const asyncHandler = require('../middleware/async');
const verifyUser = require('../middleware/auth');

// get one artist
artistsRouter.route('/details/:id').get(
  verifyUser,
  asyncHandler(async (req, res, next) => {
    const artist = await Artist.findOne({ where: { id: req.params.id } });
    if (!artist) {
      return next(
        new ErrorResponse(`no artist found with the id ${req.params.id}`, 404)
      );
    }
    res.status(200).json(artist);
  })
);

// get all albums by artist
artistsRouter.route('/albumsby/:id').get(
  verifyUser,
  asyncHandler(async (req, res, next) => {
    console.log('req user', req.user);
    const albumlist = await db.query(
      `
      SELECT al.id as album_id
      , ar.id as artist_id
      , al.name
      , al.identifier
      , ar.name as artist_name
      , ar.spotify_id as artist_spotify_id
      , count(distinct tr.id) as track_count
      , count(rt.track_id) as report_occurrence
     FROM playlist__album as al 
     INNER JOIN playlist__artist as ar ON al.artist_id = ar.id
     INNER JOIN playlist__track as tr ON tr.album_id = al.id
     INNER JOIN playlist__report_track as rt ON rt.track_id = tr.id
     WHERE ar.id = ${req.params.id}
     group by album_id
     ORDER BY al.name
    `,
      {
        type: db.QueryTypes.SELECT
      }
    );
    if (!albumlist) {
      return next(
        new ErrorResponse(`no artist found with the id ${req.params.id}`, 404)
      );
    }
    res.status(200).json(albumlist);
  })
);

// update artist
artistsRouter.route('/details/:id').put(
  verifyUser,
  asyncHandler(async (req, res, next) => {
    let { name, spotify_id } = req.body;
    const updatedArtist = await Artist.update(
      {
        name,
        spotify_id
      },
      { where: { id: req.params.id } }
    );
    if (updatedArtist[0] === 0) {
      return next(
        new ErrorResponse(`no artist found with the id ${req.params.id}`, 404)
      );
    }
    res.status(200).json(`${updatedArtist[0]} row('s) affected`);
  })
);

module.exports = artistsRouter;
