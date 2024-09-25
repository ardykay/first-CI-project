
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome To Kayode Adeyemi First CI project. Thanks 3mtt');
});

describe('GET /', () => {
  it('should return the welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Welcome To Kayode Adeyemi First CI project. Thanks 3mtt');
  });
});

