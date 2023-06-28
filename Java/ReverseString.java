import java.util.Arrays;
import java.util.Collections;

public class ReverseString {
    public static String reverseString(String s) {

        int start = 0, end = 0;

        String nStr = "", result = "";
        char c;

        for (int i = 0; i < s.length(); i++) {
            c = s.charAt(i);
            nStr = c + nStr;
        }

        while (start < s.length()) {
            if (nStr.charAt(end) != ' ' && end != nStr.length() - 1) {
                end++;
            } else {
                int startPrev = start, endPrev = end - 1;

                char rc;
                while (startPrev <= endPrev) {
                    rc = nStr.charAt(endPrev);
                    result = result + rc;
                    endPrev--;
                }
                result = result + ' ';
                end++;
                start = end;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        String s1 = "Hello World!"; // output = World! Hello

        String s2 = "The big brown fox jumped over the lazy dog";

        System.out.println(reverseString(s1));

        System.out.println(reverseString(s2));
    }

}
