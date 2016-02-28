// Given an array of integers (without any duplicates), shuffle the array such that all permutations are equally likely to be generated.

// Assumptions

// The given array is not null


public class Solution {
  public void shuffle(int[] array) {
    // Write your solution here.
    if (array == null || array.length <= 1) {
      return;
    }
    for (int i = array.length; i >= 1; i--) {
      int k = (int) (Math.random() * i);
      int temp = array[i - 1];
      array[i - 1] = array[k];
      array[k] = temp;
    }
  }
}