import { name, withdraw } from './Modules/User.js';
import { code } from './Modules/User.js';
import { age } from './Modules/User.js';
import * as usr from './Modules/User.js';
import * as acc from './Modules/Account.js';

// import { circle } from './Module/shapes/circle.js';
// import { square } from './Module/shapes/square.js';
// import { triangle } from './Module/shapes/triangle.js';

import { circle, square, triangle } from './Module/shape.js';

import { default as tg, withdraw as wd, deposit } from './Modules/Account.js';


console.log(name);

console.log(usr.name);

code();

usr.code();

console.log(age);

console.log(usr.age);

acc.withdraw();

withdraw();

wd();

deposit();

acc.deposit();

tg();

circle();

square();

triangle();