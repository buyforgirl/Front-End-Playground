// Given a word and a dictionary, determine if it can be composed by concatenating words from the given dictionary.

// Assumptions

// The given word is not null and is not empty
// The given dictionary is not null and is not empty and all the words in the dictionary are not null or empty

  public boolean canBreak(String input, String[] dict) {
    // Write your solution here.
    if (input == null || input.length() == 0 || dict == null || dict.length == 0) {
      return false;
    }
    Set<String> set = getSet(dict);
    boolean[] M = new boolean[input.length()];
    for (int i = 0; i < input.length(); i++) {
      M[i] = set.contains(input.substring(0, i + 1));
      for (int j = 0; j < i; j++) {
        if (M[j] && set.contains(input.substring(j + 1, i + 1))) {
          M[i] = true;
          break;
        }
      }
    }
    return M[input.length() - 1];
  }
  
  private Set<String> getSet(String[] dict) {
    Set<String> result = new HashSet<>();
    for (String s : dict) {
      result.add(s);
    }
    return result;
  }