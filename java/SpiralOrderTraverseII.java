// Traverse an M * N 2D array in spiral order clock-wise starting from the top left corner. Return the list of traversal sequence.

// Assumptions

// The 2D array is not null and has size of M * N where M, N >= 0
public class Solution {
  public List<Integer> spiral(int[][] matrix) {
    // Write your solution here.
    List<Integer> result = new ArrayList<Integer>();
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return result;
    }
    spiral(matrix, result, matrix.length, matrix[0].length, 0);
    return result;
  }
  
  private void spiral(int[][] matrix, List<Integer> result, int row, int col, int offset) {
    if (row <= 0 || col <= 0) {
      return;
    }
    if (row == 1) {
      for (int i = 0; i < col; i++) {
        result.add(matrix[offset][i + offset]);
      } 
      return;
    }
    if (col == 1) {
      for (int i = 0; i < row; i++) {
        result.add(matrix[i + offset][offset]);
      }
      return;
    }
    for (int i = 0; i < col - 1; i++) {
      result.add(matrix[0 + offset][i + offset]);
    }
    for (int i = 0; i < row - 1; i++) {
      result.add(matrix[i + offset][col - 1 + offset]);
    }
    for (int i = col - 1; i > 0; i--) {
      result.add(matrix[row - 1 + offset][i + offset]);
    }
    for (int i = row - 1; i > 0; i--) {
      result.add(matrix[i + offset][ offset]);
    }
    spiral(matrix, result, row - 2, col - 2, offset + 1);
  }
}
