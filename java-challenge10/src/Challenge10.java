public class Challenge10 {

    // All containers should have a volume, so the volume property should be on the Container class
    // If the Container class has the volume property, shouldn't it implement the getVolume method?
    // All children should have access to that method
    public static void main(String[] args) {
        LatteGlass latte = new LatteGlass();
        ShotGlass shot = new ShotGlass();
        Mug mug = new Mug(325);

        Container[] cupboard = { latte, shot, mug };
        for (Container container : cupboard) {
            System.out.println(container.getVolume());
        }

        System.out.println(String.format("You need %.2f teaspoons to fill this mug", mug.teaspoonCount()));
    }
}
