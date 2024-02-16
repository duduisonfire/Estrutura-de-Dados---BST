export function quickSort<T>(list: T[], start = 0, end = list.length - 1) {
  const pivot = list[Math.floor((start + end) / 2)];
  let l = start;
  let r = end;

  while (l <= r) {
    while (list[l] < pivot) l++;
    while (list[r] > pivot) r--;

    if (l <= r) {
      [list[l], list[r]] = [list[r], list[l]];
      l++;
      r--;
    }
  }

  if (start < r) quickSort(list, start, r);
  if (l < end) quickSort(list, l, end);
}

// [5, 22, 37, 92, 17, 21]
