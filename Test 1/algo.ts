// ===================== HELPER FUNCTION ========================
const _filterArray = (
  arr: number[],
  predicate: (val: number) => boolean
): number[] => {
  let result: number[] = [];
  for (const num of arr) {
    if (predicate(num)) result.push(num);
  }
  return result;
};
// ===================== HELPER FUNCTION ========================

// ===================== SOAL 1 ========================
export const sortArrayDescending = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const middleNum = arr[Math.floor(arr.length / 2)];
  const leftValues = arr.filter((val) => val > middleNum);
  const middleValues = arr.filter((val) => val === middleNum);
  const rightValues = arr.filter((val) => val < middleNum);

  return [
    ...sortArrayDescending(leftValues),
    ...middleValues,
    ...sortArrayDescending(rightValues),
  ];
};

// ===================== SOAL 2 ========================
export const findMaxSum = (arr: number[], n: number): number => {
  if (arr.length === 0 || n <= 0) return 0;

  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i]) currSum += arr[i];
  }

  maxSum = currSum;

  for (let i = n; i < arr.length; i++) {
    currSum = currSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

// ===================== SOAL 3 ========================
export const sumAllEvenNumber = (obj: any): number => {
  let result = 0;

  const isArray = Array.isArray(obj);

  if (isArray) {
    for (const item of obj) {
      if (typeof item === "object" && item !== null) {
        result += sumAllEvenNumber(item);
      } else if (typeof item === "number" && item % 2 === 0) {
        result += item;
      }
    }
  } else {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key]) {
        result += sumAllEvenNumber(obj[key]);
      } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        result += obj[key];
      }
    }
  }

  return result;
};

module.exports = {
  sortArrayDescending,
  findMaxSum,
  sumAllEvenNumber,
};
