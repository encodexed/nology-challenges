public class Triangle implements IArea, IPerimeter {

  private double sideOne;
  private double sideTwo;
  private double sideThree;

  public Triangle(double sideOne, double sideTwo, double sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  @Override
  public double getPerimeter() {
    return this.sideOne + this.sideTwo + this.sideThree;
  }

  @Override
  public double getArea() {
    double s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.sideOne) * (s - this.sideTwo) * (s - this.sideThree));
  }
}
