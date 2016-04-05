//   Given an unsorted integer array, remove adjacent duplicate elements repeatedly, from left to right. For each group of elements with the same value do not keep any of them.

// Do this in-place, using the left side of the original array. Return the array after deduplication.


  public int[] dedup(int[] array) {
    // Write your solution here.
    if (array == null || array.length <= 1) {
      return array;
    }
    int slow = -1;
    for (int fast = 0; fast < array.length; fast++) {
      if (slow == -1  || array[slow] != array[fast]) {
        array[++slow] = array[fast];
      } else {
        while (fast + 1 != array.length && array[fast + 1] == array[slow]) {
          fast++;
        }
        slow--;
      }
    }
    return Arrays.copyOf(array, slow + 1);
  }