/**
 * Copyright (c) Matthieu Jabbour.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import deepMerge from 'scripts/deepMerge';

/* eslint-disable @typescript-eslint/no-explicit-any */

jest.mock('scripts/deepCopy');

describe('deepMerge', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should throw if one of the arguments is not a plain object', () => {
    const firstObject = 3;
    const secondObject = {
      firstKey: {
        a: 'test new',
        b: 'ok',
        c: { a: 'test' },
      },
      secondKey: 14,
      thirdKey: [{ a: 'new' }],
    };
    expect(() => {
      deepMerge(firstObject as any, secondObject);
    }).toThrow(new Error('Arguments must both be plain objects.'));
  });

  test('should deeply merge nested plain objects', () => {
    const firstObject = {
      firstKey: {
        a: 'test',
        b: {
          c: 'test',
        },
      },
      secondKey: 14,
      thirdKey: [{ a: 'test' }],
    };
    const secondObject = {
      firstKey: {
        a: 'test new',
        b: 'ok',
        c: { a: 'test' },
      },
      secondKey: 15,
      thirdKey: [{ a: 'new' }],
    };
    const merge = deepMerge(firstObject, secondObject);
    expect(merge).toEqual({
      firstKey: {
        a: 'test new',
        b: 'ok',
        c: { a: 'test' },
      },
      secondKey: 15,
      thirdKey: [{ a: 'new' }],
    });
  });

  test('should merge arrays if `mergeArrays` is set to `true`', () => {
    const firstObject = {
      key: [{ a: 'test' }],
    };
    const secondObject = {
      key: [{ a: 'new' }],
    };
    const merge = deepMerge(firstObject, secondObject, true);
    expect(merge).toEqual({
      key: [{ a: 'test' }, { a: 'new' }],
    });
  });
});
