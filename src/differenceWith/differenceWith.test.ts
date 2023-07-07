import differenceWith from './differenceWith';

describe('differenceWith', () => {
  it('returns the difference between two arrays based on the comparator function', () => {
    const array1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const array2 = [{ x: 2 }];
    const comparator = (a: { x: number }, b: { x: number }) => a.x === b.x;

    expect(differenceWith(array1, array2, comparator)).toEqual([{ x: 1 }, { x: 3 }]);
  });

  it('returns an empty array if the second array is empty', () => {
    const array1 = [1, 2, 3];
    const array2: number[] = [];
    const comparator = (a: number, b: number) => a === b;

    expect(differenceWith(array1, array2, comparator)).toEqual([1, 2, 3]);
  });

  it('returns an empty array if the first array is empty', () => {
    const array1: number[] = [];
    const array2 = [1, 2, 3];
    const comparator = (a: number, b: number) => a === b;

    expect(differenceWith(array1, array2, comparator)).toEqual([]);
  });

  it('returns an empty array if both arrays are empty', () => {
    const array1: number[] = [];
    const array2: number[] = [];
    const comparator = (a: number, b: number) => a === b;

    expect(differenceWith(array1, array2, comparator)).toEqual([]);
  });
});