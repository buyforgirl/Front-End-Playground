//   Given a string, remove all leading/trailing/duplicated empty spaces.

// Assumptions:

// The given string is not null.
// Examples:

// “  a” --> “a”
// “   I     love MTV ” --> “I love MTV”

  public String removeSpaces(String input) {
    // Write your solution here.
    if (input == null || input.length() == 0) {
      return input;
    }
    
    char[] array = input.toCharArray();
    int slow = 0;
    int fast = 0;
    int count = 0;
    while (true) {
      while (fast < array.length && array[fast] == ' ') {
        fast++;
      }  
      if (fast == array.length) {
        break;
      }
      if (count > 0) {
        array[slow++] = ' ';
      }
      while (fast < array.length && array[fast] != ' ') {
        array[slow++] = array[fast++];
      }
      count++;
    }
    
    return new String(array, 0, slow);
  }