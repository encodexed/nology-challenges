import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		// Challenge: Positive or Negative?
		
		Scanner keyboard = new Scanner(System.in);
		System.out.print("Enter an integer: ");
		int n = keyboard.nextInt();
		
		if (n > 0) {
			System.out.println(n + " is a positive integer");
		} else if (n < 0) {
			System.out.println(n + " is a negative integer");
		} else if (n == 0) {
			System.out.println(n + " is neither positive or negative");
		}
		
		// Challenge: Find the largest input
		
		int highest;
		System.out.print("Enter another integer (1): ");
		int a = keyboard.nextInt();
		System.out.print("Enter another integer (2): ");
		int b = keyboard.nextInt();
		System.out.print("Enter another integer (3): ");
		int c = keyboard.nextInt();
		
		if (a > b) {
			highest = a;
		} else {
			highest = b;
		}
		
		if (highest < c) {
			highest = c;
		}
		System.out.println("The largest integer was: " + highest);
		
		// Challenge: What's the number of x in y?
		System.out.println("Let's see how many x there are in y. You can enter: s, m, h, D, M, Y, or type 'q' to exit");
		boolean running = true;
        while (running) {
          System.out.print("Enter the first input: ");
          char x = keyboard.next().charAt(0);
          if (x == 'q') {
            System.out.println("Goodbye");
            keyboard.close();
            running = false;
            return;
          }

          System.out.print("Enter the second input: ");
          char y = keyboard.next().charAt(0);
          if (x == 'q') {
            System.out.println("Goodbye");
            keyboard.close();
            running = false;
            return;
          }

          int first;
          String firstStr;
          switch (x) {
            case 's':
              first = 1;
              firstStr = "seconds";
              break;
            case 'm':
              first = 60;
              firstStr = "minutes";
              break;
            case 'h':
              first = 3600;
              firstStr = "hours";
              break;
            case 'D':
              first = 86_400;
              firstStr = "days";
              break;
            case 'M':
              first = 2_592_000;
              firstStr = "months";
              break;
            case 'Y':
              first = 31_104_000;
              firstStr = "years";
              break;
            default:
              System.out.println("Invalid input, try again...");
              continue;
          }

          int second;
          String secondStr;
          switch (y) {
            case 's':
              second = 1;
              secondStr = "second";
              break;
            case 'm':
              second = 60;
              secondStr = "minute";
              break;
            case 'h':
              second = 3600;
              secondStr = "hour";
              break;
            case 'D':
              second = 86_400;
              secondStr = "day";
              break;
            case 'M':
              second = 2_592_000;
              secondStr = "month";
              break;
            case 'Y':
              second = 31_104_000;
              secondStr = "year";
              break;
            default:
              System.out.println("Invalid input, try again...");
              continue;
          }

          int calc = second / first;
          System.out.println("There are " + calc + " " + firstStr + " in a " + secondStr);
        }
    keyboard.close();
	}

}
