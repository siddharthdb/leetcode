public class Logsdepth {
    public static void main (String[] args){

        String[] logs = {"d1/","../","../","../"};

        int i = 0; 
        int depth = 0;
        while (i < logs.length) {
            
            if (logs[i].charAt(0) != '.') {
                depth++;
            } else {
                if (logs[i] == "../") {                    
                    if (depth > 0)
                        depth--;
                }
            }
                
            i++;
        }
        
        System.out.println(depth);
    }
}