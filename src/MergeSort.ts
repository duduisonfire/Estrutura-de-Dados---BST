export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

export function defaultCompare<T>(a: T, b: T) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function mergeSort<T>(list: T[], compareFn = defaultCompare) {
  let orderedList: T[] = [];

  if (list.length > 1) {
    const { length } = list;
    const middle = Math.floor(length / 2);
    const left = mergeSort(list.slice(0, middle), compareFn);
    const right = mergeSort(list.slice(middle, length), compareFn);
    orderedList = merge(left, right, compareFn);
  }

  return orderedList;
}

function merge<T>(left: T[], right: T[], compareFn: (a: T, b: T) => number) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
