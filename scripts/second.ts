import { ls } from './first.mjs';

const CURDIR: string = process.cwd();

console.log(ls(process.cwd()));
