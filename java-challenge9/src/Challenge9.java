public class Challenge9 {
  public static void main(String[] args) throws Exception {
    double radius = 3.5;
      Circle circ = new Circle(radius);
      System.out.println(String.format("My circle with radius %.2f has an area of %.2f and perimeter %.2f", radius,
        circ.getArea(), circ.getPerimeter()));
        
      double sideOne = 3.8;
      double sideTwo = 2.4;
      double sideThree = 5.1;
      Triangle tri = new Triangle(sideOne, sideTwo, sideThree);
      System.out.println(String.format("My triangle with sides %.2f, %.2f, %.2f has an area of %.2f and perimeter %.2f",
        sideOne, sideTwo, sideThree, tri.getArea(), tri.getPerimeter()));
        
      double sideLength = 4;
      double diagonalOne = 1.4;
      double diagonalTwo = 2.9;
      Rhombus rhom = new Rhombus(sideLength, diagonalOne, diagonalTwo);
      System.out.println(String
        .format("My rhombus with side length %.2f and diagonals %.2f, %.2f has an area of %.2f and perimeter %.2f", sideLength, diagonalOne, diagonalTwo, rhom.getArea(), rhom.getPerimeter()));
    }
}
