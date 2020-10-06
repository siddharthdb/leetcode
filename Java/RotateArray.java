public class RotateArray {
    public void rotate(int[] nums, int k) {

        int hold = 0;
        int n = nums.length;

        while (k > 0) {
            hold = nums[n - 1];
            for (int i = n - 1; i > 0; --i) {
                nums[i] = nums[i - 1];
            }
            nums[0] = hold;
            k--;
        }
    }
}
