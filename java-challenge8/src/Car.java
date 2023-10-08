// 1 metre/second = 2.23694 miles/hour
// 1 mile/hour = 0.44704 metres/second
public class Car implements IVehicle {
  public double speedMPS;

  public Car(double speedMPS) {
    this.speedMPS = speedMPS;
  }

  public double getSpeed() {
    return this.speedMPS;
  }

  public void setSpeed(double speedMPS) {
    this.speedMPS = speedMPS;
  }

  public double getSpeedMPH() {
    return this.speedMPS * 2.23694;
  }

  public void decreaseSpeedMPH(int s) {
    this.speedMPS = this.speedMPS * (s * 0.44704);
  }
}
