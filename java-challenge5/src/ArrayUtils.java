import java.util.Arrays;

public class ArrayUtils {
  // add a method that takes in an int[] array and returns an array with elements incremented by one
  public static int[] incrementArrayByOne(int[] source) {
    for (int i = 0; i < source.length; i++) {
      source[i]++;
    }
    return source;
  }

  // add a method that takes in an int[] array and returns reversed arrays
  public static int[] reverseArray(int[] source) {
    // returns new array:
    // int[] intArr = new int[source.length];
    // for (int i = 0; i < source.length; i++) {
    //   intArr[source.length - i - 1] = source[i];
    // }
    // return intArr;

    // mutates:
    for (int i = 0; i < source.length / 2; i++) {
      int temp = source[i];
      source[i] = source[source.length - i - 1];
      source[source.length - i - 1] = temp;
    }

    return source;
  }

  // a method that removes the last element from an array
  public static int[] removeLastElement(int[] source) {
    return Arrays.copyOf(source, source.length - 1);
  }
}

