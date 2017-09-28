/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
import { appError, redirectError, serviceError, trackerError, trackerErrorWithRedirect } from 'server/errors';

describe('server/errors', () => {

  describe('appError', () => {

    it('should return an Error with a message', () => {
      const message = 'test message';
      const error = appError(message);

      error.should.be.instanceOf(Error);
      expect(error.message).to.equal(message);
    });

  });

  describe('redirectError', () => {

    let message, redirect, error;

    beforeEach(() => {
      message = 'test message';
      redirect = 'test';
      error = redirectError(message, redirect);
    });

    it('should return an Error', () => {
      error.should.be.instanceOf(Error);
    });

    it('should have a message property on the Error', () => {
      expect(error.message).to.equal(message);
    });

    it('should have a redirect property on the Error', () => {
      expect(error.redirect).to.equal(redirect);
    });

    it('should throw an error if no redirect argument', () => {
      expect(() => redirectError(message)).to.throw(Error);
    });

  });

  describe('serviceError', () => {

    let message, status, error;

    beforeEach(() => {
      message = 'test message';
      status = 500;
      error = serviceError(message, status);
    });

    it('should return an Error', () => {
      error.should.be.instanceOf(Error);
    });

    it('should have a message property on the Error', () => {
      expect(error.message).to.equal(message);
    });

    it('should have a status property on the Error', () => {
      expect(error.status).to.equal(status);
    });

    it('should throw an error if no status argument', () => {
      expect(() => serviceError(message)).to.throw(Error);
    });

  });

});
