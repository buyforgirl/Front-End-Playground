public class Solution {
  public List<Integer> spiral(int[][] matrix) {
    // Write your solution here.
    List<Integer> result = new ArrayList<Integer>();
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return result;
    }
    spiral(matrix, result, 0, matrix.length);
    return result;
  }
  
  private void spiral(int[][] matrix, List<Integer> result, int offset, int size) {
    if (size == 0) {
      return;
    }
    if (size == 1) {
      result.add(matrix[offset][offset]);
      return;
    }
    for (int i = 0; i < size - 1; i++) {
      result.add(matrix[0 + offset][i + offset]);
    }
    for (int i = 0; i < size - 1; i++) {
      result.add(matrix[i + offset][size - 1 + offset]);
    }
    for (int i = size - 1; i > 0; i--) {
      result.add(matrix[size - 1 + offset][i + offset]);
    }
    for (int i = size - 1; i > 0; i--) {
      result.add(matrix[i + offset][0 + offset]);
    }
    spiral(matrix, result, offset + 1, size - 2);
  }
}
