'use strict';

import handler from './app';
// var event;

describe('Tests index', function() {
  it('verifies successful response', async () => {
    const result = await handler();

    expect(result).toBeObject();
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeString();

    let response = JSON.parse(result.body);

    expect(response).toBeObject();
    expect(response.message).toEqual('hello world');
    expect(response.location).toBeString();
  });
});
