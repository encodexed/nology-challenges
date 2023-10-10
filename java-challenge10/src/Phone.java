public abstract class Phone {
  
  String phoneNumber;

  public Phone(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public void call(Phone phone) {
    System.out.println("Calling " + phone.phoneNumber);
  }
}
