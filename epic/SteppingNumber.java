import java.util.*;

class SteppingNumber {
    public void listSteppingNumber(int s, int e) {
        while (s <= e) {
            String str = String.valueOf(s);
            if (isSteppingNumber(str)) {
                System.out.print(str + " ");
            }
            s++;
        }
    }

    private boolean isSteppingNumber(String str) {
        if (str.length() == 1) {
            return false;
        }
        List<String> numbers = new ArrayList<>();
        while (str.length() > 3) {
            numbers.add(str.substring(str.length() - 3));
            str = str.substring(0, str.length() - 3);
        }
        numbers.add(str);
        for (String seq : numbers) {
            for (int i = 0; i < seq.length() - 1; ++i) {
                if (Math.abs(seq.charAt(i) - seq.charAt(i + 1)) != 1) {
                    return false;
                }
            }
        }

        return true;
    }


    public static void main(String[] args) {
        SteppingNumber solution = new SteppingNumber();
        solution.listSteppingNumber(1,15000);
    }
}