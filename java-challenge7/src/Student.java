public class Student extends Person {
  
  private String cohort;

  public Student(String name, String cohort) {
    super(name);
    this.cohort = cohort;
  }

  public void sayName() {
    System.out.println(String.format("Hi, I'm %s and I am in the cohort %s", this.getName(), this.cohort));
  }
}
