  //Given a sorted integer array, remove duplicate elements.
  // For each group of elements with the same value keep only one of them.
  // Do this in-place, using the left side of the original array and maintain 
  //the relative order of the elements of the array. Return the array after 
  //deduplication.
  public int[] dedup(int[] array) {
    // Write your solution here.
    if (array == null || array.length == 0) {
      return array;
    }
    int slow = 0; // the left hand not including slow index are processed
    int fast = 1; // the right hand not including fast index is current position 
    while (fast < array.length) {
      if (array[fast] != array[slow]) {
        array[++slow] = array[fast];
      }
      fast++;
    }
    return Arrays.copyOf(array, slow + 1);
  }