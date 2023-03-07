/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i+1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if (i === words.length) return 0;

  return words[i].length > longest(words, i+1) ? words[i].length : words[i+1].length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, result = '') {
  if (i >= str.length) return result;
  result += str[i];

  return everyOther(str, i + 2, result);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let startIdx = i;
  let endIdx = str.length - i - 1;
  if (startIdx >= endIdx) return true;
  if (str[startIdx] !== str[endIdx]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;

  return arr[i] === val ? i : findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, result = '') {
  if (i < 0) return result;
  result += str[i];

  return revString(str, i - 1, result);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj){
    if (typeof obj[key] !== "string") result.push(...gatherStrings(obj[key]));
    else result.push(obj[key]);
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length) {
  if (start > end) return -1;
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] === val) return middle;
  if (arr[middle] > val) return binarySearch(arr, val, start, middle - 1);
  else return binarySearch(arr, val, middle + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
