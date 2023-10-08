public class Person {
  
  private String name;
  // Cannot be read by child, must be retrieved in child using getter method

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
