/*
Every day you rent the car costs $40.
If you rent the car for 7 or more days, 
    you get $50 off your total.
Alternatively, if you rent the car for 3 or more days,
    you get $20 off your total.
Write a code that gives out the total amount for different days(d). */

const dailyPrice = 40;
const one_day_rental = 1;
const days_rented_7 = 7;
const days_rented_3 = 3;
const totalAmount = (numberOfDays) => {
  let special = 0;
  let total = dailyPrice * (numberOfDays + one_day_rental);
  let totalWithSpecial = total - special;
  if (numberOfDays === days_rented_7) {
    special = 50;
    return totalWithSpecial;
  } else if (numberOfDays === days_rented_3) {
    special = 20;
    return totalWithSpecial;
  } else if (numberOfDays === one_day_rental) {
    return totalWithSpecial;
  } else {
    return "Please choose the correct number of days to view your total";
  }
};
totalAmount(12);
