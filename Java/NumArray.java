public class NumArray {

    private int[] data;

    public NumArray(int[] nums) {
        data = nums;
    }

    public int sumRange(int i, int j) {
        int sum = 0;
        for (int k = i; k <= j; k++) {
            sum += data[k];
        }
        return sum;
    }
}