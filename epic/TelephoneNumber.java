import java.util.*;

public class TelephoneNumber {
    public void telephoneNumber(int len, Set<Integer> notAllow) {
        List<String> result = new ArrayList<String>();
        dfs(result, new StringBuilder(), notAllow, len);
        for (String str : result) {
            System.out.print(str + " ");
        }
    }

    private void dfs (List<String> result, StringBuilder sb, Set<Integer> notAllow, int len) {
        if (len == 0) {
            result.add(new String(sb));
            return;
        }

        for (int i = 0; i <= 9; ++i) {
            if (notAllow.contains(i)) {
                continue;
            }
            if (sb.length() != 0 && i == 4) {
                continue;
            }
            if (sb.length() > 0 && sb.charAt(sb.length() - 1) == (char)('0' + i)) {
                continue;
            }
            sb.append(i);
            dfs(result, sb, notAllow, len - 1);
            sb.deleteCharAt(sb.length() - 1);
        }
    }

    public static void main(String[] args) {
        TelephoneNumber solution = new TelephoneNumber();
        Set<Integer> set = new HashSet<>();
        set.add(2);
        set.add(7);
        set.add(9);
        solution.telephoneNumber(4, set);
    }
}