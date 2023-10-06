public class Challenge7 {
    public static void main(String[] args) throws Exception {

        Teacher aidan = new Teacher("Aidan");
        Teacher calum = new Teacher("Calum");

        Student robbie = new Student("Robbie", "Vanuatu");
        Student max = new Student("Max", "Vanuatu");
        Student meshak = new Student("Meshak", "Vanuatu");

        Person[] people = { aidan, calum, robbie, max, meshak };
        for (int i = 0; i < people.length; i++) {
            people[i].sayName();
        }

        calum.callMeeting(aidan);
        calum.callMeeting(meshak);
        aidan.callMeeting(max);
    }
}
