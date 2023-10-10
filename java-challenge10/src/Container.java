public abstract class Container {

  int volume;
  int mlWaterPerTeaspoon = 150;

  public Container(int volume) {
    this.volume = volume;
  }
  
  abstract double getVolume();

  public double teaspoonCount() {
    return this.getVolume() / this.mlWaterPerTeaspoon;
  }
}
