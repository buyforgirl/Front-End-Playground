import java.util.*;

class SMS {
    private String[] map = {"0","1","ABC2","DEF3","GHI4","JKL5","MNO6","PQRS7","TUV8","WXYZ9"};

    public String getSMS(String str) {
        if (str == null || str.length() == 0) {
            return "";
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); ++i) {
            if (str.charAt(i) == '*') {
                sb.append(" ");
                continue;
            }
            if (str.charAt(i) == '#') {
                continue;
            }
            if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
                int selected = 0;
                String curr = map[str.charAt(i) - '0'];
                while (i + 1 < str.length() && str.charAt(i + 1) == str.charAt(i)) {
                    i++;
                    selected++;
                } 
                sb.append(curr.charAt(selected % curr.length()));
            } else {
                System.out.println("Wrong Answer");
                return null;
            }
        }
        return new String(sb);
    }

    public static void main(String[] args) {
        SMS solution = new SMS();
        System.out.println(solution.getSMS("22233*#44444"));
    }
}