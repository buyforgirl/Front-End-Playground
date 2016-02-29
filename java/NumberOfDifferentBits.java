  //Determine the number of bits that are different for two given integers.

  public int diffBits(int a, int b) {
    // Write your solution here.
    int c = a ^ b;
    int count = 0;
    while (c != 0) {
      count += c & 1;
      c >>>= 1;
    }
    return count;
  }