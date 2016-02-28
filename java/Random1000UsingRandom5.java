public class Solution {
  public int random1000() {
    // Write your solution here.
    // you can use RandomFive.random5() for generating
    // 0 - 4 with equal probability.
    
    while (true) {
      int times = 5; // 5 ^ 5 = 3125
      int random = 0;
      while (times-- > 0) {
        random = random * 5 + RandomFive.random5();
      }
      if (random < 1000) {
        return random;
      }
    }
  }
}