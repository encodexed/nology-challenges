public class Teacher extends Person {

  public Teacher(String name) {
    super(name);
  }

  public void callMeeting(Person personObj) {
    String personName = personObj.getName();
    System.out.println(String.format("A meeting is to be held between %s and %s", this.getName(), personName));
  }
  
}
