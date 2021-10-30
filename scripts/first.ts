#!/usr/bin/env node
import { statSync, readdirSync } from 'fs';
import * as fs from 'fs';

/**
 * @param dir: fs.PathLike
 * @return string[]
 */

type FSFunction = (pathstr: fs.PathLike) => fs.PathLike[];

export const ls: fs.PathLike[] = (dir: fs.PathLike) => {
  if (statSync(dir).isDirectory) {
    console.log('Here it is:');
    return readdirSync(dir);
  } else {
    console.error(`${dir} is not a dir.`);
  }
};

function list(dir: fs.PathLike): fs.PathLike[] {
  return fs.readdirSync(dir);
}

type strobj = {
  key1: string;
  key2: string;
};

export default list;

console.log();
