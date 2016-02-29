//  Determine if the characters of a given string are all unique.

// Assumptions

// We are using ASCII charset, the value of valid characters are from 0 to 255
// The given string is not null

  public boolean allUnique(String word) {
    // write your solution here
    int[] map = new int [4];
    for (int i = 0; i < word.length(); i++) {
      int c = word.charAt(i);
      if ((map[c / 32] &  (1 << (c % 32))) != 0) {
        return false;
      }
      map[c / 32] |= 1 << (c % 32);
    }
    return true;
  }