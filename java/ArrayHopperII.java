//   Given an array A of non-negative integers, you are initially positioned at index 0 of the array. A[i] means the maximum jump distance from index i (you can only jump towards the end of the array). Determine the minimum number of jumps you need to reach the end of array. If you can not reach the end of the array, return -1.

// Assumptions

// The given array is not null and has length of at least 1.


  public int minJump(int[] array) {
    // Write your solution here.
    if (array == null || array.length == 0) {
      return 0;
    }
    int[] M = new int[array.length];
    M[array.length - 1] = 0;
    for (int i = array.length - 2; i >= 0; i--) {
      M[i] = Integer.MAX_VALUE;
      for (int j = 1; j <= array[i]; j++) {
        if (i + j < array.length && M[i + j] != Integer.MAX_VALUE) {
          M[i] = Math.min(M[i], M[i + j] + 1);
        }
      }
    }
    return M[0] == Integer.MAX_VALUE? -1 : M[0];
  }