import java.util.Stack;

public class ValidParantheses {

    public static boolean isValid(String s) {
        if (s.length() % 2 == 1)
            return false;
        
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '{' || s.charAt(i) == '[' || s.charAt(i) == '(') {
                stack.push(s.charAt(i));
            }

            if (s.charAt(i) == '}') {
                if ((Character)stack.pop() != '{') {
                    return false;
                }
            }

            if (s.charAt(i) == ')') {
                if ((Character)stack.pop() != '(') {
                    return false;
                }
            }

            if (s.charAt(i) == ']') {
                if ((Character)stack.pop() != '[') {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isValid("(([]))"));
        System.out.println(isValid("(([{]}))"));
    }
    
}
