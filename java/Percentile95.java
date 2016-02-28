
// Given a list of integers representing the lengths of urls, find the 95 percentile of all lengths (95% of the urls have lengths <= returned length).

// Assumptions

// The maximum length of valid url is 4096

// The list is not null and is not empty and does not contain null

public class Solution {
  public int percentile95(List<Integer> lengths) {
    // Write your solution here.
    if (lengths == null || lengths.size() == 0) {
      return 0;
    }
    int[] hash = new int[4097];
    for (int len : lengths) {
      hash[len]++;
    }
    int len = 4096;
    int sum = 0;
    int size = (int)(0.05 * lengths.size());
    while (sum <= size) {
      sum += hash[len--];
    }
    return len + 1;
  }
}