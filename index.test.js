const request = require('./request');
const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
const headers = { Authorization: 'Token 123' };

test('webrequest get', async () => {
    const res = await request(url, 'GET', null, headers);

    expect(res[0].id).toBe(1);
});

test('webrequest post', async () => {
    const title = 'Jest Post';
    const res = await request(url, 'POST', { title }, headers);

    expect(res.title).toBe(title);
});

test('webrequest put', async () => {
    const title = 'jest put';
    const res = await request(`${url}/1`, 'PUT', { title }, headers);

    expect(res).toEqual({ title, id: 1 });
});

test('webrequest patch', async () => {
    const title = 'jest patch';
    const res = await request(`${url}/1`, 'PATCH', { title }, headers);

    expect(res).toEqual({ title, id: 1 });
});

test('webrequest delete', async () => {
    const method = 'delete';
    const res = await request(`${url}/1`, method);
});