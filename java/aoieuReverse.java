public String reverseVowel(String str) { 
	if (str == null || str.length() <= 1) { 
		return str;
}
Set<Character> set = new HashSet<>(Arrays.asList(‘a’, ‘e’, ‘i’, ‘o’, ‘u’));
StringBuilder result = new StringBuilder(str);
int left = 0;
int right = str.length() - 1;
while (left < right) {
	if (!set.contains(str.charAt(left))) {
left++;
} else if (!set.contains(str.charAt(right))) {
	right--;
} else {
	swap(result, left++, right--);
}
}
return result.toString();
}

private void swap(StringBuilder sb, int left, int right) {
	char temp = sb.charAt(left);
	sb.setCharAt(left, sb.charAt(right));
	sb.setCharAt(right, temp);
}
