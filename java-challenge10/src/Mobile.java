public class Mobile extends Phone {
  
  public Mobile(String phoneNumber) {
    super(phoneNumber);
  }

  public void sendText(Mobile mobile, String textBody) {
    System.out.println("Sending a text to " + mobile + ".");
    System.out.println("It says: " + textBody);
  }
}
