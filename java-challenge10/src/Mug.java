public class Mug extends Container{
  
  public Mug(int ml) {
    super(ml);
  }
  
  @Override
  public double getVolume() {
    return this.volume;
  }
}
