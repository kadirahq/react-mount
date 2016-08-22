import {describe, it} from 'mocha';
import {expect} from 'chai';
import mock from 'mock-require';

mock('domready', cb => {
  setTimeout(cb, 100);
});

mock('react-dom', {
  render: () => {}
});

const {
  withOptions
} = require('../');

describe('index', () => {
  describe('withOptions', () => {
    it('should call the given function with options', done => {
      const fn = (layoutClass, regions = {}, options) => {
        expect(layoutClass).to.be.equal('abc');
        expect(regions).to.deep.equal({});
        expect(options).to.deep.equal({aa: 10});
        done();
      };

      withOptions({aa: 10}, fn)('abc');
    });
  });
});
