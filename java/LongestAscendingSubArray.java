// Given an unsorted array, find the length of the longest subarray in which the numbers are in ascending order.

// Assumptions

// The given array is not null
// Examples

// {7, 2, 3, 1, 5, 8, 9, 6}, longest ascending subarray is {1, 5, 8, 9}, length is 4.

// {1, 2, 3, 3, 4, 4, 5}, longest ascending subarray is {1, 2, 3}, length is 3.


  // state: M{i] represents the longest length of subarray ending at index i;
  // induction rule: M[i] = M[i - 1] + 1 (if A[i] >= A[i - 1])
  //                     = 1 (if A[i] < A[i - 1])
  // result max{M[i]}
  // base case M[0] = 1;
  public int longest(int[] array) {
    // Write your solution here.
    if (array == null || array.length == 0) {
      return 0;
    }
    int[] M = new int[array.length];
    M[0] = 1;
    int longest = 1;
    for (int i = 1; i < array.length; i++) {
      if (array[i] > array[i - 1]) {
        M[i] = M[i - 1] + 1;
      } else {
        M[i] = 1;
      }
      longest = Math.max(longest, M[i]);
    }
    return longest;
  }