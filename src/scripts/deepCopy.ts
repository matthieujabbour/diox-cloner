/**
 * Copyright (c) Matthieu Jabbour.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isPlainObject from 'is-plain-object';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Performs a deep copy of a variable. Only plain objects and arrays are deeply copied.
 *
 * @param {any} variable Variable to deeply copy.
 *
 * @returns {any} Variable's deep copy.
 */
export default function deepCopy(variable: any): any {
  if (isPlainObject(variable)) {
    return Object.keys(variable).reduce(
      (newObject, key) => Object.assign(newObject, {
        [key]: deepCopy(variable[key]),
      }),
      {},
    );
  }
  if (Array.isArray(variable)) {
    return variable.map(deepCopy);
  }
  return variable;
}
