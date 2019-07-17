import { joinPath } from './utils';

describe('test for the function joinPath cases', () => {

  it("checks join path", () => {
    let test1 = joinPath(['../examples', 'play/play.js']);
    console.log(test1);
    expect(test1).not.toBeUndefined();
  });

  it("checks resolve path", () => {
    const dirs = [
      '../examples',
      '../../sd/tests',
      '../src/files.js'
    ];
    let test2 = joinPath(dirs, true);
    console.log(test2);
    expect(test2).not.toBeUndefined();
  });
})