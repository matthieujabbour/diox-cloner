/**
 * Copyright (c) Matthieu Jabbour.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isPlainObject from 'is-plain-object';
import deepCopy from 'scripts/deepCopy';


/**
 * Performs a deep merge of two plain objects. Only plain objects and arrays are deeply copied.
 *
 * @param {Record<string, any>} firstObject First object.
 *
 * @param {Record<string, any>} secondObject Second object.
 *
 * @param {bool} [mergeArrays = false] Whether to merge objects arrays instead of replacing them.
 *
 * @returns {Record<string, any>} A new object resulting of merging of the two others.
 *
 * @throws {Error} If one of the arguments is not a plain object.
 */
export default function deepMerge(
  firstObject: Record<string, any>,
  secondObject: Record<string, any>,
  mergeArrays = false,
): Record<string, any> {
  if (!isPlainObject(firstObject) || !isPlainObject(secondObject)) {
    throw new Error('Arguments must both be plain objects.');
  }
  const newObject = deepCopy(firstObject);
  Object.keys(secondObject).forEach((key) => {
    if (isPlainObject(firstObject[key]) && isPlainObject(secondObject[key])) {
      newObject[key] = deepMerge(firstObject[key], secondObject[key]);
    } else if (Array.isArray(firstObject[key]) && Array.isArray(secondObject[key]) && mergeArrays) {
      newObject[key] = newObject[key].concat(deepCopy(secondObject[key]));
    } else {
      newObject[key] = deepCopy(secondObject[key]);
    }
  });
  return newObject;
}
