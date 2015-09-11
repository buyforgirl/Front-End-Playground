import java.util.*;

class WellOrderString {
    public void wellOrderString(int num) {
        List<String> result = new ArrayList<>();
        dfs(0, num, result, new StringBuilder());
        for (String str : result) {
            System.out.print(str + ",");
        }
    }

    private void dfs(int pos, int num, List<String> result, StringBuilder sb) {
        if (num == 0) {
            result.add(new String(sb));
            return;
        }
        for (int i = pos; i < 26; ++i) {
            sb.append((char)('A'+i));
            dfs(i + 1, num - 1, result, sb);
            sb.deleteCharAt(sb.length() - 1);
            sb.append((char) ('a'+i));
            dfs(i + 1, num - 1, result, sb);
            sb.deleteCharAt(sb.length() - 1);
        }
    }

    public static void main(String[] args) {
        WellOrderString solution = new WellOrderString();
        solution.wellOrderString(3);
    }
}