// eslint-disable-next-line node/no-unpublished-require
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

let token;

beforeAll(async () => {
  const loginCredentials = {
    username: 'test',
    password: 'test',
  };
  const req = await api.post('/api/login').send(loginCredentials);
  token = req.body.token;
});

test('successful login returns 200', async () => {
  const loginCredentials = {
    username: 'test',
    password: 'test',
  };
  await api
    .post('/api/login')
    .send(loginCredentials)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

it('should require authorization', async () => {
  await api.get('/api/users').expect(401);
});

it('should return list of users', async () => {
  await api
    .get('/api/users')
    .set('Authorization', `bearer ${token}`)
    .expect(200);
});
