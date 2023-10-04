public class Challenge3 {
    public static void main(String[] args) {
		Animal dexter = new Animal("dog", "Dexter", "woof");
		Animal joseph = new Animal("bear", "Joseph", "roarrrr!");
		
		System.out.println(dexter.getCall());
		System.out.println(joseph.getCall());
		
		System.out.println(dexter.useCall());
		System.out.println(joseph.useCall());
	}
}
