public class Solution {
  public int largest(int[][] matrix) {
    // Write your solution here.
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return 0;
    }
    int row = matrix.length;
    int col = matrix[0].length;
    int[][] leftToRight = fillLeftToRight(matrix);
    int[][] rightToLeft = fillRightToLeft(matrix);
    int[][] topToDown = fillTopToDown(matrix);
    int[][] DownToTop = fillDownToTop(matrix);
    int[][] M = new int[row][col];
    int largest = 0;
    for (int i = 0; i < row; i++) {
      for (int j = 0; j < col; j++) {
        int min = Math.min(leftToRight[i][j], rightToLeft[i][j]);
        min = Math.min(min, topToDown[i][j]);
        min = Math.min(min, DownToTop[i][j]);
        M[i][j] = min;
        largest = Math.max(largest, M[i][j]);
      }
    }
    return largest;
  }
  
  private int[][] fillLeftToRight(int[][] matrix) {
    int[][] result = new int[matrix.length][matrix[0].length];
    for (int i = 0; i < result.length; i++) {
      result[i][0] = matrix[i][0];
      for (int j = 1; j < result[0].length; j++) {
        if (matrix[i][j] == 1) {
          result[i][j] =  result[i][j - 1] + 1; 
        } else {
          result[i][j] = 0;
        }
      }
    }
    return result;
  }
  
  private int[][] fillRightToLeft(int[][] matrix) {
    int[][] result = new int[matrix.length][matrix[0].length];
    for (int i = 0; i < result.length; i++) {
      result[i][result[0].length - 1] = matrix[i][result[0].length - 1];
      for (int j = result[0].length - 2; j >= 0; j--) {
        if (matrix[i][j] == 1) {
          result[i][j] =  result[i][j + 1] + 1; 
        } else {
          result[i][j] = 0;
        }
      }
    }
    return result;
  }
  
  private int[][] fillTopToDown(int[][] matrix) {
    int[][] result = new int[matrix.length][matrix[0].length];
    for (int i = 0; i < result[0].length; i++) {
      result[0][i] = matrix[0][i];
      for (int j = 1; j < result.length; j++) {
        if (matrix[j][i] == 1) {
          result[j][i] =  result[j - 1][i] + 1; 
        } else {
          result[j][i] = 0;
        }
      }
    }
    return result;
  }
  
  private int[][] fillDownToTop(int[][] matrix) {
    int[][] result = new int[matrix.length][matrix[0].length];
    for (int i = 0; i < result[0].length; i++) {
      result[result.length - 1][i] = matrix[result.length - 1][i];
      for (int j = result.length - 2; j >= 0; j--) {
        if (matrix[j][i] == 1) {
          result[j][i] =  result[j + 1][i] + 1; 
        } else {
          result[j][i] = 0;
        }
      }
    }
    return result;
  }
}
