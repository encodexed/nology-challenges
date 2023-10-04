public class Methods {
  public static double findArea(double radius) {
    return (Math.PI * radius * radius);
  }

  public static String fullName(String firstName, String secondName) {
    return String.format("%s %s", firstName, secondName);
  }

  public static String firstName(String fullName) {
    String[] names = fullName.split(" ");
    return names[0];
  }

  public static String dateFormatter(long seconds) {
    long hours = seconds / 3600;
    long hourRemainingSeconds = seconds % 3600;

    long minutes = hourRemainingSeconds / 60;
    long secondsLeft = hourRemainingSeconds % 60;

    String hoursStr = hours + "h";
    if (hoursStr.length() == 2) {
      hoursStr = "0" + hoursStr;
    }
    String minutesStr = minutes + "m";
    if (minutesStr.length() == 2) {
      minutesStr = "0" + minutesStr;
    }
    String secondsStr = secondsLeft + "s";
    if (secondsStr.length() == 2) {
      secondsStr = "0" + secondsStr;
    }
    return String.format("%s%s%s", hoursStr, minutesStr, secondsStr);
  }
  
  public static String dataFormatter(long seconds, long minutes) {
    long totalSeconds = seconds + (minutes * 60);
    return dateFormatter(totalSeconds);
  }
}
