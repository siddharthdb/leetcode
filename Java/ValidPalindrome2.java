/**
  Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/

public class ValidPalindrome2 {
    public static boolean isPalindrome(String s) {
        int i = 0, j = s.length() - 1;

        while(i<j)
        {
            if(s.charAt(i) != s.charAt(j))
                break;
            i++;
            j--;
        }

        if (check(s, i+1, j) || check(s, i, j - 1))
            return true;
    
        return false;
    }

    static boolean check(String s, int i, int j)
    {
        while(i<j)
        {
            if(s.charAt(i) != s.charAt(j))
                return false;
            
            i++;
            j--;
        }
        return true;
    }

    public static void main(String[] args) {
        String s1 = "madame"; // output = true
        String s2 = "abca"; // output = true
        String s3 = "tebbem"; // output = false

        System.out.println("String s1 - " + isPalindrome(s1));
        System.out.println("String s2 - " + isPalindrome(s2));
        System.out.println("String s3 - " + isPalindrome(s3));
    }
}