import {sortArrayDescending, findMaxSum, sumAllEvenNumber} from "../algo";

describe("sortArrayDescending", () => {
  it("1. should sort an array in descending order", () => {
    expect(sortArrayDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
      5, 4, 3, 3, 2, 2, 1, 1,
    ]);
  });

  it("2. should sort an array in descending order", () => {
    expect(sortArrayDescending([5, 7, 2, 5, 7, 2])).toEqual([7, 7, 5, 5, 2, 2]);
  });

  it("should handle an empty array", () => {
    expect(sortArrayDescending([])).toEqual([]);
  });

  it("should handle an array with one element", () => {
    expect(sortArrayDescending([1])).toEqual([1]);
  });
});

describe("findMaxSum", () => {
  it("1. should find the sum of the n largest numbers", () => {
    expect(findMaxSum([100, 200, 300, 400], 2)).toBe(700);
  });

  it("2. should find the sum of the n largest numbers", () => {
    expect(findMaxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });

  it("3. should find the sum of the n largest numbers", () => {
    expect(findMaxSum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  it("4 should find the sum of the n largest numbers", () => {
    expect(findMaxSum([5, 10, 1, 10, 10, 2], 3)).toBe(22);
  });

  it("should handle n greater than array length", () => {
    expect(findMaxSum([1, 2, 3], 5)).toBe(6);
  });

  it("should handle empty array", () => {
    expect(findMaxSum([], 3)).toBe(0);
  });
});

describe("sumAllEvenNumber", () => {
  it("1. should sum all even numbers in a nested object", () => {
    const obj = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    expect(sumAllEvenNumber(obj)).toBe(6);
  });

  it("2. should sum all even numbers in a nested object", () => {
    const obj = {
      a: 1,
      b: 2,
      c: {d: 3, e: 4},
      f: [5, 6, 7, 8],
    };
    expect(sumAllEvenNumber(obj)).toBe(20);
  });

  it("should handle object with no even numbers", () => {
    const obj = {a: 1, b: 3, c: {d: 5}};
    expect(sumAllEvenNumber(obj)).toBe(0);
  });

  it("should handle empty object", () => {
    expect(sumAllEvenNumber({})).toBe(0);
  });
});
