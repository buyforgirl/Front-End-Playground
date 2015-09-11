import java.util.*;

class DesirableNumber {
    public void desirableNumber(int num) {
        List<Integer> result = new ArrayList<>();
        dfs(result, num, 1, 0);
        for (Integer i : result) {
            System.out.print(i + ",");
        }
    }

    private void dfs(List<Integer> result, int num, int pos, int curr) {
        if (num == 0) {
            result.add(curr);
            return;
        }
        for (int i = pos; i <= 9; ++i) {
            curr = curr * 10 + i;
            dfs(result, num - 1, i + 1, curr);
            curr = curr / 10;
        }
    }
    
    public static void main(String[] args) {
        DesirableNumber solution = new DesirableNumber();
        solution.desirableNumber(3);
    }
}