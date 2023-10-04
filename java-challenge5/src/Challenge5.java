import java.util.Arrays;

public class Challenge5 {
    public static void main(String[] args) throws Exception {
        int[] numbers1 = { 1, 2, 3, 4, 5, 6 };
        ArrayUtils.incrementArrayByOne(numbers1); // mutates array
        System.out.println(Arrays.toString(numbers1));

        int[] numbers2 = { 1, 2, 3, 4, 5, 6 };
        ArrayUtils.reverseArray(numbers2); // mutates array
        System.out.println(Arrays.toString(numbers2));

        int[] numbers3 = { 1, 2, 3, 4, 5, 6 };
        numbers3 = ArrayUtils.removeLastElement(numbers3); // mutates array
        System.out.println(Arrays.toString(numbers3));
    }
}
