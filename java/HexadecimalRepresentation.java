//   Generate the hexadecimal representation for a given non-negative integer number as a string. The hex representation should start with "0x".

// There should not be extra zeros on the left side.


  public String hex(int number) {
    // Write your solution here.
    String prefix = "0x";
    if (number == 0) {
      return prefix + "0";
    }
    StringBuilder sb = new StringBuilder();
    while (number > 0) {
      int remain = number % 16;
      if (remain < 10) {
        sb.append((char)('0' + remain));
      } else {
        sb.append((char)('A' + remain - 10));
      }
      number /= 16;
    }
    return prefix + sb.reverse().toString();
  }