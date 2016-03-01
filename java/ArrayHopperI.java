// Given an array A of non-negative integers, you are initially positioned at index 0 of the array. A[i] means the maximum jump distance from that position (you can only jump towards the end of the array). Determine if you are able to reach the last index.

// Assumptions

// The given array is not null and has length of at least 1.

  public boolean canJump(int[] array) {
    // Write your solution here.
    if (array == null || array.length == 0) {
      return false;
    }
    boolean[] M = new boolean[array.length];
    M[array.length - 1] = true;
    for (int i = array.length - 2; i >= 0; i--) {
      M[i] = false;
      for (int j = 1; j <= array[i]; j++) {
        if (i + j < array.length) {
          M[i] = M[i] || M[i + j];
        }
      }
    }
    return M[0];
  }