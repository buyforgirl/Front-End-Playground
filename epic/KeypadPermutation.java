import java.util.*;

class KeypadPermutation {
    private String[] map = {"", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS","TUV","WXYZ"};

    public List<String> keypadPermutation(String digits) {
        List<String> result = new ArrayList<String>();
        if (digits == null || digits.length() == 0) {
            return result;
        }
        dfs(result, new StringBuilder(), digits, 0);
        return result;
    }

    private void dfs(List<String> result, StringBuilder sb, String digits, int pos) {
        if (pos == digits.length()) {
            result.add(new String(sb));
            return;
        }
        String curr = map[digits.charAt(pos) - '0'];
        for (int i = 0; i < curr.length(); ++i) {
            sb.append(curr.charAt(i));
            dfs(result, sb, digits, pos + 1);
            sb.deleteCharAt(sb.length() - 1);
        }
    }

    public static void main(String[] args) {
        KeypadPermutation solution = new KeypadPermutation();
        List<String> result = solution.keypadPermutation("23");
        for (String str : result) {
            System.out.print(str + " ");
        }
    }
}