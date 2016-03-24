// Given a sorted integer array, remove duplicate elements.
// For each group of elements with the same value keep at most
// two of them. Do this in-place, using the left side of the original 
//array and maintain the relative order of the elements of the array.
// Return the array after deduplication.



public int[] dedup(int[] array) {
    // Write your solution here.
    if (array == null || array.length <= 2) {
      return array;
    }
    int slow = 1;
    for (int fast = 2; fast < array.length; fast++) {
      if (array[fast] != array[slow - 1]) {
        array[++slow] = array[fast];
      }
    }
    return Arrays.copyOf(array, slow + 1);
  }