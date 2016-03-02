// Consider an unlimited flow of data elements. How do you sample one element from this flow, such that at any point during the processing of the flow, you can return a random element from the n elements read so far.

// You will implement two methods for a sampling class:

// read(int value) - read one number from the flow
// sample() - return at any time the sample, if n values have been read, the probability of returning any one of the n values is 1/n, return null(Java)/INT_MIN(C++) if there is no value read so far
// You may need to add more fields for the class.


public class Solution {
  private int count;
  private Integer curr;
  
  public Solution() {
    // Write your constructor code here if necessary.
    count = 0;
    curr = null;
  }
  
  public void read(int value) {
    // Write your implementation here.
    count++;
    int k = (int) (Math.random() * count);
    if (k == 0) {
        curr = value;
    }  
  }
  
  public Integer sample() {
    // Write your implementation here.
    return curr;
  }
}