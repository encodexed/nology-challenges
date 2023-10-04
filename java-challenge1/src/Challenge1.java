import java.util.Scanner;

public class Challenge1 {
    public static void main(String[] args) {
    byte someByte = 127;
		short someShort = 20_000;
		int someInt = 400_000;
		
		Scanner keyboard = new Scanner(System.in);
		System.out.print("Enter a whole number: ");
		int inputInt = keyboard.nextInt();
		System.out.println("Result integer from dividing someByte by your input: " + (someByte / inputInt));
		
		long someLong = (long)(someShort * inputInt);
		System.out.println("Resulting long from multiplying someShort by your input: " + someLong);
		
		double someOtherDouble = (double)(someInt / inputInt);
		System.out.println("Resulting double from dividing someInt by your input: " + someOtherDouble);
		
		System.out.print("Now enter a string of text: ");
		String inputStr = keyboard.next();
		char firstChar = inputStr.charAt(0);
		System.out.println("The first letter is: " + firstChar);
		keyboard.close();
  }
}
