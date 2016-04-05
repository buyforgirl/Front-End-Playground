// Given a sorted integer array, remove duplicate elements. 
//For each group of elements with the same value do not keep 
// any of them. Do this in-place, using the left side of the 
// original array and and maintain the relative order of the 
//elements of the array. Return the array after deduplication.


public int[] dedup(int[] array) {
    // Write your solution here.
    if (array == null || array.length == 0) {
      return array;
    }
    boolean flag = false;
    int slow = 0;
    for (int fast = 1; fast < array.length; fast++) {
      if (array[slow] == array[fast]) {
        flag = true;
      } else {
        if (flag) {
          array[slow] = array[fast];
          flag = false;
        } else {
          array[++slow] = array[fast]; 
        }
      }
    }
    return flag ? Arrays.copyOf(array, slow) : Arrays.copyOf(array, slow + 1);
  }