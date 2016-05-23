#CMPT276 Assignment 1: Grade Calculator

##Website
https://cmpt276-a1-calculator.herokuapp.com/calculator.html

The Grade Calculator allows you to enter the grade of an activity to find out its percent.

Then you can choose to find the sum of all grades divided by total number of grades (mean) or the sum of all grades divided by the sum of all maximums (average).

##Features
1. Calculates the percent of an activity in real time. If the percent is an invalid number, nothing will be displayed in the percentage column. An invalid number is NaN value, infinity (e.g. anything divided by 0), or negative percentage.

2. You can change the name of the activity or short name. If you remove the name, a placeholder will still show which activity number or short name it is.

3. You can leave the grade of activities blank, and they will not be calculated in the average or mean.
**NOTE: You must enter a value for both numerator and denominator for average or mean to work properly.**

4. Percentages that have decimals will only be calculated up to 2 decimal places. (e.g. 1/10 = 10%, 1.1/10 = 10.1%, 1.11 = 10.11%, 1.1111111/10 = 10.11%)

5. You can add or remove rows to the bottom of the table with the "+ Activity" or "- Activity" buttons. The rows added will automatically be named with the corresponding number of activity. The new rows will still have all the features above. Removing rows will remove them from the bottom up. You can remove rows up until there is one activity left, and if you try to remove that you will get a pop up message preventing you from doing so.

6. You can hit the "Reset" button to clear the Grades, Percentages, Totals, and reset the table back to 4 activities with their default names.
