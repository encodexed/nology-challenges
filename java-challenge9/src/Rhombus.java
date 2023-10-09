public class Rhombus implements IArea, IPerimeter {

  private double sideLength;
  private double diagonalOne;
  private double diagonalTwo;

  public Rhombus(double sideLength, double diagonalOne, double diagonalTwo) {
    this.sideLength = sideLength;
    this.diagonalOne = diagonalOne;
    this.diagonalTwo = diagonalTwo;
  } 

  @Override
  public double getPerimeter() {
    return this.sideLength * 4;
  }

  @Override
  public double getArea() {
    return (this.diagonalOne * this.diagonalTwo) / 2;
  }
}
