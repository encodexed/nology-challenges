public class Circle implements IArea, IPerimeter {
  
  private double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  public double getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  @Override
  public double getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
