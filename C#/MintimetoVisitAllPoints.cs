public class Solution {
    public int MinTimeToVisitAllPoints(int[][] points) {
        int count = 0;
        
        for (int i = 0; i < points.Length - 1; i++) {
            var src = points[i];
            
            var dest = points[i + 1];
            
            count += Math.Max(Math.Abs(src[0] - dest[0]), Math.Abs(src[1] - dest[1]));
        }
        
        return count;
    }
}