// Given a random generator random5(), the return value of random5() is 0 - 4 with equal probability. Use random5() to implement random7()


public class Solution {
  public int random7() {
    // write your solution here
    // you can use RandomFive.random5() for generating
    // 0 - 4 with equal probability.
    int random = 0;
    while (true) {
      random = RandomFive.random5() * 5 + RandomFive.random5();
      if (random < 21) {
        break;
      }
    }
    
    return random % 7;
  }
}