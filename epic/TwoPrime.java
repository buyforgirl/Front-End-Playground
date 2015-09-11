class TwoPrime {
    public void twoPrime(int num) {
        for (int i = 2; i <= num / 2; ++i) {
            if (isPrime(i) && isPrime(num - i)) {
                System.out.print(i + " " + (num - i));
                return;
            }
        }
    }

    private boolean isPrime(int num) {
        if (num == 2) {
            return true;
        }
        if (num % 2 == 0) {
            return false;
        }
        for (int i = 3; i * i <= num; i += 2) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        TwoPrime solution = new TwoPrime();
        solution.twoPrime(34503020);
    }
}