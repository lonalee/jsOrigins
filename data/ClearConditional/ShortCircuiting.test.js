// import test from 'node:test';
// import { getFirstImage } from './ShortCircuiting';
const { getFirstImage } = require('./ShortCircuiting');

describe('1st test suite', () => {
  it('it getFirstImage', () => {
    const res = getFirstImage(null);
    console.log('res -->', res);
  });
});
