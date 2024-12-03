const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});

describe('test the /status path', () => {
    test('It should response with JSON containing API status', async () => {
        const response = await request(app).get('/status');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('{"status":"API is running"}');
    });
});