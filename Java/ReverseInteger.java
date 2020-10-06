public class ReverseInteger {
    public int reverse(int x) {
        
        int tmp_num = Math.abs(x);
        
        long sum = 0;
        
        while(tmp_num != 0) {
            
            sum = (sum * 10) + (tmp_num % 10);
            
            tmp_num = tmp_num / 10;
        }
        
        if(sum > Integer.MAX_VALUE || sum < Integer.MIN_VALUE)
            return 0;
        
        if(x < 0)
            return (int)(sum * -1);
                
        return (int)sum;
    }
}