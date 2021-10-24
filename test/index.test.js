import { expect, server, BASE_URL } from './setup.js';

describe('index page test', () => {
  it('gets index url', (done) => {
    server
      .get(`${BASE_URL}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('index');
        done();
      });
  });
});
