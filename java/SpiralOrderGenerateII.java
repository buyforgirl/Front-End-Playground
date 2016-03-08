// Generate an M * N 2D array in spiral order clock-wise starting from the top left corner, using the numbers of 1, 2, 3, …, M * N in increasing order.

// Assumptions

// M >= 0, N >= 0

public class Solution {
  public int[][] spiralGenerate(int m, int n) {
    // Write your solution here.
    int[][] matrix = new int[m][n];
    if (m < 0 || n < 0) {
      return matrix;
    }
    spiralGenerate(matrix, m, n, 0, 1);
    return matrix;
  }
  
  private void spiralGenerate(int[][] matrix, int row, int col, int offset, int count) {
    if (row == 0 || col == 0) {
      return;
    }
    if (row == 1) {
      for (int i = 0; i < col; i++) {
        matrix[offset][offset + i] =  count++;
      }
      return;
    } 
    if (col == 1) {
      for (int i = 0; i < row; i++) {
        matrix[offset + i][offset] = count++;
      }
      return;
    }
    for (int i = 0; i < col - 1; i++) {
      matrix[0 + offset][i + offset] = count++;
    }
    for (int i = 0; i < row - 1; i++) {
      matrix[i + offset][col - 1 + offset] = count++;
    }
    for (int i = col - 1; i > 0; i--) {
      matrix[row - 1 + offset][i + offset] = count++;
    }
    for (int i = row - 1; i > 0; i--) {
      matrix[i + offset][0 + offset] = count++;
    }
    spiralGenerate(matrix, row - 2, col - 2, offset + 1, count);
  }
}
