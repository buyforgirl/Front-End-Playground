// Given an unlimited flow of numbers, keep track of the median of all elements seen so far.

// You will have to implement the following two methods for the class

// read(int value) - read one value from the flow
// median() - return the median at any time, return null if there is no value read so far

public class Solution {
  private PriorityQueue<Integer> maxHeap;
  private PriorityQueue<Integer> minHeap;
  public Solution() {
    // add new fields and complete the constructor if necessary.
    maxHeap = new PriorityQueue<>(11, Collections.reverseOrder());
    minHeap = new PriorityQueue<>();
  }
  
  public void read(int value) {
    // write your implementation here.
    if (maxHeap.isEmpty() || maxHeap.peek() >= value) {
      maxHeap.offer(value);
    } else {
      minHeap.offer(value);
    }
    
    if (maxHeap.size() - minHeap.size() >= 2) {
      minHeap.offer(maxHeap.poll());
    } else if (minHeap.size() > maxHeap.size()) {
      maxHeap.offer(minHeap.poll()); 
    }
  }
  
  public Double median() {
    // write your implementation here.
    if (maxHeap.size() + minHeap.size() == 0) {
      return null;
    }
    if ((maxHeap.size() + minHeap.size()) % 2 != 0) {
      return (double) maxHeap.peek();
    } else {
      return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }
  }
}
