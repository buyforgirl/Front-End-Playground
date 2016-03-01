// Given a rope with positive integer-length n, how to cut the rope into m integer-length parts with length p[0], p[1], ...,p[m-1], in order to get the maximal product of p[0]*p[1]* ... *p[m-1]? m is determined by you and must be greater than 0 (at least one cut must be made). Return the max product you can have.

// Assumptions

// n >= 2

  public int maxProduct(int length) {
    // Write your solution here.
    if (length <= 1) {
      return 0;
    }
    int[] M = new int[length + 1];
    M[1] = 0;

    for (int i = 2; i <= length; i++) {
      for (int j = 1; j < i; j++) {
        M[i] = Math.max(M[i], Math.max(i - j, M[i - j]) * j);
      }
    }
    return M[length];
  }