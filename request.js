const request = require('request-promise');

async function webrequest(url, method, payload, headers) {
    if (typeof payload === "string") {
        payload = JSON.parse(payload);
    }

    if (typeof headers === "string") {
        headers = JSON.parse(headers);
    }

    const result = await request({
        uri: url,
        method,
        headers,
        body: payload,
        json: !!payload
    });

    if (typeof result === 'string') {
        return JSON.parse(result);
    }

    return result;
}

module.exports = webrequest;