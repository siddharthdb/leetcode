// number of persons in gondola * boardingCost - trip * runningCost = profit
// each gondola serves 4 customers
// if profit < 0 its a loss and return -1

public class MaxOperatingCost {
    public static void main(String[] args) {

        // int[] customers = { 8, 3 }; int boardingCost = 5, runningCost = 6;
        // int[] customers = { 3,4,0,5,1 }; int boardingCost = 1, runningCost = 92;
        // int[] customers = { 10, 9, 6 }; int boardingCost = 6, runningCost = 4;
        int[] customers = { 10, 10, 6, 4, 7 }; int boardingCost = 3, runningCost = 8;

        int waiting = 0, gondolaOccupants = 0, profit = 0, trip = 0;

        for (int cust : customers) {

            trip++;

            if (waiting == 0) {
                if (cust >= 4) {
                    gondolaOccupants = gondolaOccupants + 4;
                    waiting = waiting + cust - 4;
                } else if (cust < 4) {
                    gondolaOccupants = gondolaOccupants + cust;
                }
            } else {
                gondolaOccupants = gondolaOccupants + 4;
                waiting = waiting - 4 + cust;
            }

            profit = (gondolaOccupants * boardingCost) - (trip * runningCost);
        }

        while (waiting != 0) {
            trip++;
            if (waiting >= 4) {
                gondolaOccupants = gondolaOccupants + 4;
                waiting = waiting - 4;
            } else if (waiting < 4) {
                gondolaOccupants = gondolaOccupants + waiting;
                waiting = 0;
            }

            profit = (gondolaOccupants * boardingCost) - (trip * runningCost);
        }

        if (profit < 0) {
            profit = 0;
            trip = -1;
        }

        System.out.println(profit + " " + trip);
    }
}
