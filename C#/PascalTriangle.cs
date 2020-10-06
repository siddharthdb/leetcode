public class PascalTriangle {

    public List<List<int>> generateTriangle(int numRows) {
        List<List<int>> triangle = new List<List<int>>();
        
        if (numRows == 0) {
            return triangle;
        }
        
        List<int> firstRow = new List<int>();
        
        firstRow.Add(1);
        triangle.Add(firstRow);
        
        for (int i = 1; i < numRows; i++) {
            
            List<int> row = new List<int>();
            List<int> prevrow = triangle[i - 1];
            
            row.Add(1);
            
            for (int j = 1; j < i; j++) {
                row.Add(prevrow[j - 1] + prevrow[j]);
            }
            
            row.Add(1);
            
            triangle.Add(row);
        }
        
        return triangle;
    }
}