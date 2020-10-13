public class RepeatedStringPattern {
    public boolean IsRepeatedStringPattern(String s) {
        int n = s.length();
        if (n < 2)
            return false;
        if (n == 2)
            return s.charAt(0) == s.charAt(1);

        for (int i = n / 2; i > 0; i--) {
            if (n % i == 0) {
                int j = 0;

                while (i + j < n && s.charAt(j) == s.charAt(i + j))
                    j++;

                if (i + j == n)
                    return true;
            }
        }
        return false;
    }
}