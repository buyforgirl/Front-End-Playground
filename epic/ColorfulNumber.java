import java.util.HashSet;
import java.util.Set;

class ColorfulNumber {
    public boolean colorful(int number) {
        if (number < 10) {
            return true;
        }
        String test = String.valueOf(number);
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < test.length(); ++i) {
            for (int j = i; j < test.length(); ++j) {
                String subseq = test.substring(i, j + 1);
                if (!set.add(product(subseq))) {
                    return false;
                }
            }
        }
        return true;
    }

    public int product(String str) {
        int num = Integer.valueOf(str);
        int result = 1;
        while (num > 0) {
            result *= num % 10;
            num = num / 10;
        }
        return result;
    }

    public static void main(String[] args) {
        ColorfulNumber solution = new ColorfulNumber();
        System.out.println(solution.colorful(3245));
        System.out.println(solution.colorful(326));
    }
}