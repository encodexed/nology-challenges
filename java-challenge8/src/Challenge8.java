public class Challenge8 {
    public static void main(String[] args) throws Exception {
        Bike myBike = new Bike(24);
        Car myCar = new Car(13.53);

        System.out.println("I have a fantastic bike.");
        System.out.println(String.format("Bike speed in kmh: %.2f", myBike.getSpeed()));
        System.out.println(String.format("Bike speed in mph: %.2f", myBike.getSpeedMPH()));

        System.out.println("\nDecreasing bike speed by 4mph");
        myBike.decreaseSpeedMPH(4);
        System.out.println(String.format("Bike speed in kmh: %.2f", myBike.getSpeed()));
        System.out.println(String.format("Bike speed in mph: %.2f", myBike.getSpeedMPH()));

        System.out.println("\nStopping bike altogether");
        myBike.setSpeed(0);
        System.out.println(String.format("Bike speed in kmh: %.2f", myBike.getSpeed()));
        System.out.println(String.format("Bike speed in mph: %.2f", myBike.getSpeedMPH()));

        System.out.println("I have a fantastic car.");
        System.out.println(String.format("Car speed in metres/sec: %.2f", myCar.getSpeed()));
        System.out.println(String.format("Car speed in mph: %.2f", myCar.getSpeedMPH()));

        System.out.println("\nDecreasing car speed by 4mph");
        myCar.decreaseSpeedMPH(4);
        System.out.println(String.format("Car speed in metres/sec: %.2f", myCar.getSpeed()));
        System.out.println(String.format("Car speed in mph: %.2f", myCar.getSpeedMPH()));

        System.out.println("\nStopping car altogether");
        myCar.setSpeed(0);
        System.out.println(String.format("Car speed in metres/sec: %.2f", myCar.getSpeed()));
        System.out.println(String.format("Car speed in mph: %.2f", myCar.getSpeedMPH()));
    }
}
