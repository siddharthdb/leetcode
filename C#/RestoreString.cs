/**
* Given a string s and an integer array indices of the same length.
* The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
* Return the shuffled string.
* Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
* Output: "leetcode"
* Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
*/

public class Solution {
    public string RestoreString(string s, int[] indices) {
        
        if (indices.Length == 1)
            return s;
        
        Dictionary<int, string> sMap = new Dictionary<int, string>();
        
        string result = string.Empty;
        
        for (int i = 0; i < s.Length; i++) {
            sMap.Add(indices[i], s[i].ToString());            
        }
        
        var keyList = sMap.Keys.ToList();
        keyList.Sort();
        
        foreach(var k in keyList) {
            result += sMap[k];
        }
        
        return result;
        
    }
}