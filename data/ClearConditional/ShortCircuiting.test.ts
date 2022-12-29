import { describe, it } from 'node:test';
import { getFirstImage } from './ShortCircuiting';
// const {getFirstImage} = require('./ShortCircuiting');

describe('1st test suite', () => {
  it('it: getFirstImage', () => {
    getFirstImage({
      images: [],
    });
  });
});
