import { conHello, fnPlusNumbers } from './library_named.js';
console.log(conHello, '이름으로 내보내기');
console.log('1+2 = ', fnPlusNumbers(1,2));

import * as myLibrary from './library_named.js';
console.log(myLibrary.conHello);

import fnMyFunction from './library_default.js';
console.log(fnMyFunction(5,6));