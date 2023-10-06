public class Person {
  
  private String name;

  public Person(String name) {
    this.name = name;
  }

  public void sayName() {
    System.out.println(String.format("Hi, I'm %s", this.name));
  }

  public String getName() {
    return this.name;
  }
}
