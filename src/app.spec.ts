'use strict';

import handler from './app';
// var event;

describe('Tests index', function() {
  it('verifies successful response', async () => {
    const result = await handler();

    expect(typeof result).toBe('object');
    expect(result.statusCode).toEqual(200);
    expect(typeof result.body).toBe('string');

    let response = JSON.parse(result.body);

    expect(typeof response).toBe('object');
    expect(response.message).toEqual('hello world');
    expect(typeof response.location).toBe('string');
  });
});
