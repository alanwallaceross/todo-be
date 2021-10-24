import { expect, server, BASE_URL } from './setup.js';

describe('Todos page test', () => {
  it('gets todos url', (done) => {
    server
      .get(`${BASE_URL}todos`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Environment variable is coming across'
        );
        done();
      });
  });
});
