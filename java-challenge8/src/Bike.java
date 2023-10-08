// 1 mile = 1.60934 km
// 1 km = 0.621371 miles


public class Bike implements IVehicle{
  private double speedKPH;

  public Bike(double speedKPH) {
    this.speedKPH = speedKPH;
  }

  public double getSpeed() {
    return this.speedKPH;
  }

  public void setSpeed(double speedKPH) {
    this.speedKPH = speedKPH;
  }

  public double getSpeedMPH() {
    return this.speedKPH * 0.621371;
  }

  public void decreaseSpeedMPH(int s) {
    this.speedKPH = this.speedKPH - (s * 1.60934);
  }
}
