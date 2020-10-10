public class Solution {
    public int SearchInsert(int[] nums, int target) {
                
        int idx = 0;
                
        foreach(var n in nums ) {            
            if (n == target) 
                return idx;
            
            if (n < target) {
                idx++;
                continue;
            }
            
            break;            
        }
        
        if (idx == nums.Length)
            return idx++;
        else
            return idx;
    }
}