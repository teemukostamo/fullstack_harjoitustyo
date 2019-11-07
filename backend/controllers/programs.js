const jwt = require('jsonwebtoken');
const programsRouter = require('express').Router();
const Program = require('../models/Program');
const db = require('../config/database');

// getTokenFrom eristää tokenin authorization -headeristä
const getTokenFrom = req => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

// get all active programs
programsRouter.get('/active', async (req, res, next) => {
  try {
    // see if token exists
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }

    // const programs = await Program.findAll();
    const programs = await db.query(
      'SELECT * FROM playlist__program WHERE display = 1 order by name asc',
      {
        type: db.QueryTypes.SELECT
      }
    );
    res.json(programs);
  } catch (exception) {
    next(exception);
  }
});

// get all programs
programsRouter.get('/all', async (req, res, next) => {
  try {
    // see if token exists
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }

    // const programs = await Program.findAll();
    const programs = await db.query(
      'SELECT * FROM playlist__program order by display desc, name asc',
      {
        type: db.QueryTypes.SELECT
      }
    );
    res.json(programs);
  } catch (exception) {
    next(exception);
  }
});

// get one program
programsRouter.get('/getone/:id', async (req, res, next) => {
  try {
    // see if token exists
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }

    // const programs = await Program.findAll();
    const program = await db.query(
      `SELECT * FROM playlist__program WHERE id = ${req.params.id}`,
      {
        type: db.QueryTypes.SELECT
      }
    );
    res.json(program);
  } catch (exception) {
    next(exception);
  }
});

// create new program
programsRouter.post('/', async (req, res, next) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }
    console.log(req.body);
    const savedProgram = await Program.create({
      user_id: req.body.user_id,
      identifier: req.body.identifier,
      name: req.body.name,
      display: 1,
      site: 1
    });
    console.log(savedProgram);
    res.status(201).json(savedProgram);
  } catch (exception) {
    next(exception);
  }
});

// update program
programsRouter.put('/', async (req, res, next) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }
    let { id, name, identifier, site, display } = req.body;

    const programToUpdate = await Program.update(
      {
        name,
        identifier,
        site,
        display
      },
      { where: { id: id } }
    );
    console.log(programToUpdate);
    res.status(200).json(programToUpdate);
  } catch (exception) {
    next(exception);
  }
});

module.exports = programsRouter;
