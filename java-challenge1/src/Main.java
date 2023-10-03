import java.util.Scanner;

class Main {
  public static void main(String[] args) {
      Scanner s = new Scanner(System.in);
      System.out.print("Please enter an integer: ");
      int fromUser = s.nextInt();
      System.out.println("Your input was " + fromUser);
      s.close();
  }
}