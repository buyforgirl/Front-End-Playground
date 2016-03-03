// Given an array containing only 0s and 1s, find the length of the longest subarray of consecutive 1s.

// Assumptions

// The given array is not null
// Examples

// {0, 1, 0, 1, 1, 1, 0}, the longest consecutive 1s is 3.

  public int longest(int[] array) {
    // Write your solution here.
    if (array == null || array.length == 0) {
      return 0;
    }
    int M = array[0];
    int longest = M;
    for (int i = 1; i < array.length; i++) {
      if (array[i] == 1) {
        M = M + array[i];
      } else {
        M = 0;
      }
      longest = Math.max(longest, M);
    }
    return longest;
  }