import java.util.HashMap;

public class WordPattern {
    public boolean wordPattern(String pattern, String s) {
        HashMap p = new HashMap();

        String[] wordList = s.split(" "); // single space

        if (pattern.length() != wordList.length)
            return false;

        for (int i = 0; i < wordList.length; i++) {
            char c = pattern.charAt(i);
            String w = wordList[i];

            if (!p.containsKey(c))
                p.put(c, i);

            if (!p.containsKey(w))
                p.put(w, i);

            if (p.get(c) != p.get(w))
                return false;
        }

        return true;
    }
}
