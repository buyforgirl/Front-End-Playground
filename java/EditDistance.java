// Given two strings of alphanumeric characters, determine the minimum number of Replace, Delete, and Insert operations needed to transform one string into the other.

// Assumptions

// Both strings are not null


  public int editDistance(String one, String two) {
    // Write your solution here.
    int[][] M = new int[one.length() + 1][two.length() + 1];
    for (int i = 0; i <= one.length(); i++) {
      for (int j = 0; j <= two.length(); j++) {
        if (i == 0) {
          M[i][j] = j;
        } else if (j == 0) {
          M[i][j] = i;
        } else if (one.charAt(i - 1) == two.charAt(j - 1)) {
          M[i][j] = M[i - 1][j -1];
        } else {
          M[i][j] = Math.min(M[i][j - 1] + 1, M[i - 1][j] + 1);
          M[i][j] = Math.min(M[i - 1][j - 1] + 1, M[i][j]);
        }
      }
    }
    return M[one.length()][two.length()];
  }