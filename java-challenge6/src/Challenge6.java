import java.util.Arrays;

public class Challenge6 {
    public static void main(String[] args) throws Exception {
        int num = 1;
        int[][][][] multi = new int[2][2][3][4];    
        for (int i = 0; i < multi.length; i++) {
            for (int j = 0; j < multi[i].length; j++) {
                for (int k = 0; k < multi[i][j].length; k++) {
                    for (int m = 0; m < multi[i][j][k].length; m++) {
                        multi[i][j][k][m] = num;
                        num++;
                    }
                }
            }
        }
        System.out.println(Arrays.deepToString(multi));
    }
}

