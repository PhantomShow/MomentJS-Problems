const moment = require("moment-timezone");

console.log("\n----------------------------------------------------------");
console.log("1. Parsing");
console.log("----------------------------------------------------------");

// 1. Parsing
let input = ["13/02/2022", "03/04/2022", "Q3 of 2021", "Tue, 22 Feb 2022"];

function formatAnyInputToStandardDate(input) {
  // 1st input
  let first = moment(input[0], "DD/MM/YYYY");
  console.log(`${input[0]} is ${first.format("MM/DD/YYYY")}`);

  // 2nd input
  let second = moment(input[1], "MM/DD/YYYY");
  console.log(`${input[1]} is ${second.format("MM/DD/YYYY")}`);

  // 3rd input
  let third = moment(input[2], "Q YYYY");
  console.log(`${input[2]} starts on ${third.format("MM/DD/YYYY")}`);

  // 4th input
  let fourth = moment(input[3], "ddd DD MMM YYYY");
  console.log(`${input[3]} is ${fourth.format("MM/DD/YYYY")}`);
}

formatAnyInputToStandardDate(input);
console.log("\n----------------------------------------------------------");
console.log("2. First Monday of Year");
console.log("----------------------------------------------------------");
// 2. First Monday of Year
function getFirstMondayOfYear(year) {
  // Value of key is how many days left to Monday
  complement = {
    Sunday: 1,
    Monday: 0,
    Tuesday: 6,
    Wednesday: 5,
    Thursday: 4,
    Friday: 3,
    Saturday: 2,
  };
  let startOfYear = moment(year).startOf("year");
  let firstDayOfYear = startOfYear.format("dddd");

  // add how many days left to monday from current day
  let firstMonday = startOfYear.add(complement[firstDayOfYear], "days");
  console.log(`First Monday of ${year} is ${firstMonday.format("MM/DD/YYYY")}`);
}

getFirstMondayOfYear("2023");
getFirstMondayOfYear("2020");
getFirstMondayOfYear("2018");

console.log("\n----------------------------------------------------------");
console.log("3. Last Monday of the Year");
console.log("----------------------------------------------------------");

// 3. Last Monday of Year
function getLastMondayOfYear(year) {
  // Value of key is how many days left to previous Monday
  let complement = {
    Sunday: 6,
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
  };
  let endOfYear = moment(year).endOf("year");
  let lastDayOfYear = endOfYear.format("dddd");

  // subtract how many days past monday from current day
  let lastMonday = endOfYear.subtract(complement[lastDayOfYear], "days");
  console.log(`Last Monday of ${year} is ${lastMonday.format("MM/DD/YYYY")}`);
}

getLastMondayOfYear("2023");
getLastMondayOfYear("2020");
getLastMondayOfYear("2018");

console.log("\n----------------------------------------------------------");
console.log("4. Difference between two dates");
console.log("----------------------------------------------------------");

// 4. Difference between two dates
function differenceBetweenTwoDatesAndTime(date1, time1, date2, time2) {
  let firstDate = moment(`${date1} ${time1}`, "MM/DD/YYYY hh:mm");
  let secondDate = moment(`${date2} ${time2}`, "MM/DD/YYYY hh:mm");

  // Add difference to make each time value dependent
  let yearDiff = firstDate.diff(secondDate, "years");
  secondDate.add(yearDiff, "years");

  let monthDiff = firstDate.diff(secondDate, "month");
  secondDate.add(monthDiff, "months");

  let dayDiff = firstDate.diff(secondDate, "days");
  secondDate.add(dayDiff, "days");

  let hourDiff = firstDate.diff(secondDate, "hours");
  secondDate.add(hourDiff, "hours");

  let minuteDiff = firstDate.diff(secondDate, "minutes");
  secondDate.add(minuteDiff, "minutes");

  console.log(
    `The difference between ${date1} ${time1}, and ${date2} ${time2}, is 
    ${Math.abs(yearDiff)} Years, ${Math.abs(monthDiff)} Months, ${Math.abs(
      dayDiff
    )} Days, ${Math.abs(hourDiff)} Hours, and ${Math.abs(minuteDiff)} Minute`
  );
}
differenceBetweenTwoDatesAndTime("03/01/2022", "13:03", "03/01/2022", "15:04");
differenceBetweenTwoDatesAndTime("05/01/2020", "16:03", "03/02/2023", "01:22");

console.log("\n----------------------------------------------------------");
console.log("5. Closest to Now");
console.log("----------------------------------------------------------");

// 5. Closest to Now
function closestToNow() {
  function generateRandomDate() {
    let randomMonthOne = Math.floor(Math.random() * 12) + 1; // 1-12
    let randomDayOne = Math.floor(Math.random() * 31) + 1; // 1-31
    let randomYearOne = Math.floor(Math.random() * 2001) + 1000; // 1000-3000
    let dateOne = moment(
      `${randomMonthOne}/${randomDayOne}/${randomYearOne}`,
      "MM/DD/YYYY"
    );
    // Assign another day if it overflows
    while (!dateOne.isValid) {
      randomDayOne = Math.floor(Math.random() * 31) + 1; // 1-31
      dateOne = moment(
        `${randomMonthOne}/${randomDayOne}/${randomYearOne}`,
        "MM/DD/YYYY"
      );
    }
    return dateOne;
  }

  let dateOne = generateRandomDate();
  let dateTwo = generateRandomDate();

  let now = moment();
  let dateOneDiff = dateOne.diff(now);
  let dateTwoDiff = dateTwo.diff(now);

  if (Math.abs(dateOneDiff) < Math.abs(dateTwoDiff)) {
    console.log(
      `${dateOne.format("MM/DD/YYYY")} is closer to now than ${dateTwo.format(
        "MM/DD/YYYY"
      )}`
    );
  } else if (Math.abs(dateOneDiff) > Math.abs(dateTwoDiff)) {
    console.log(
      `${dateTwo.format("MM/DD/YYYY")} is closer to now than ${dateOne.format(
        "MM/DD/YYYY"
      )}`
    );
  } else {
    console.log("Both dates are equally close to now");
  }
}

closestToNow();
closestToNow();
closestToNow();

console.log("\n----------------------------------------------------------");
console.log("6. Countdown Until 2026 in Miami");
console.log("----------------------------------------------------------");

// 6. Countdown Until 2026 in Miami
function countdownMiami() {
  let target = moment("01/01/2026", "MM/DD/YYYY");
  let now = moment();

  // Add difference to make each time value dependent
  let yearDiff = target.diff(now, "years");
  now.add(yearDiff, "years");

  let monthDiff = target.diff(now, "month");
  now.add(monthDiff, "months");

  let dayDiff = target.diff(now, "days");
  now.add(dayDiff, "days");

  let hourDiff = target.diff(now, "hours");
  now.add(hourDiff, "hours");

  let minuteDiff = target.diff(now, "minutes");
  now.add(minuteDiff, "minutes");

  let secondDiff = target.diff(now, "seconds");

  console.log(
    `${yearDiff} Years, ${monthDiff} Months, ${dayDiff} Days, ${hourDiff} Hours, ${minuteDiff} Minutes, and ${secondDiff} seconds left until 2026 in Miami.`
  );
}

countdownMiami();

console.log("\n----------------------------------------------------------");
console.log("7. Countdown Until 2026 in Qatar");
console.log("----------------------------------------------------------");

// 7. Countdown Until 2026 in Qatar
function countdownQatar() {
  let target = moment("01/01/2026 +03:00", "MM/DD/YYYY ZZ");
  let now = moment();

  // Add difference to make each time value dependent
  let yearDiff = target.diff(now, "years");
  now.add(yearDiff, "years");

  let monthDiff = target.diff(now, "month");
  now.add(monthDiff, "months");

  let dayDiff = target.diff(now, "days");
  now.add(dayDiff, "days");

  let hourDiff = target.diff(now, "hours");
  now.add(hourDiff, "hours");

  let minuteDiff = target.diff(now, "minutes");
  now.add(minuteDiff, "minutes");

  let secondDiff = target.diff(now, "seconds");

  console.log(
    `${yearDiff} Years, ${monthDiff} Months, ${dayDiff} Days, ${hourDiff} Hours, ${minuteDiff} Minutes, and ${secondDiff} seconds left until 2026 in Qatar.`
  );
}

countdownQatar();

console.log("\n----------------------------------------------------------");
console.log("8. Time Zone Difference");
console.log("----------------------------------------------------------");

// 8. Time Zone Difference
function timezoneHourDifference(dateAndTime, timezone1, timezone2) {
  let dateOne = moment.tz(dateAndTime, "MM/DD/YYYY hh:mma", timezone1);
  let dateTwo = moment.tz(dateAndTime, "MM/DD/YYYY hh:mma", timezone2);
  // console.log(dateOne.toString(), dateTwo.toString());
  console.log(
    `There is a ${dateOne.diff(
      dateTwo,
      "hour"
    )} hour difference between ${timezone1} and ${timezone2} at ${dateAndTime}.`
  );
}

// Result is 16 but pdf says 8? Shanghai is 16 hours ahead of Los Angeles though, GMT+0800 - GMT-0800 = 16
timezoneHourDifference(
  "03/02/2022 03:45pm",
  "America/Los_Angeles",
  "Asia/Shanghai"
);

console.log("\n----------------------------------------------------------");
console.log("9. All Days Of The Week of the Month");
console.log("----------------------------------------------------------");

// 9. All Days Of The Week of the Month
function getAllSpecificDays(year, month, dayOfWeek) {
  let allDaysOfWeek = [];
  dayIndex = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  let givenDate = moment(`${month}/${year}`, "MM/YYYY");
  let currentDay = givenDate.day(dayIndex[dayOfWeek]);

  // Add one week if first day-of-week is from the previous month
  if (currentDay.format("M") != month) {
    // != instead of !== since we are comparing string to number
    currentDay.add(7, "days");
  }

  while (currentDay.format("M") == month) {
    allDaysOfWeek.push(currentDay.format("MM/DD/YYYY"));
    currentDay.add(7, "days");
  }
  console.log(`All ${dayOfWeek}s of month ${month} and year ${year}:`);
  console.log(allDaysOfWeek);
}

getAllSpecificDays(2022, 3, "Tuesday");

console.log("\n----------------------------------------------------------");
console.log("10. Imaginary World");
console.log(
  "Assuming January and February are now after December and are the last two months"
);
console.log("----------------------------------------------------------");

// 10. Imaginary World
function getWeekOfYear(date) {
  let givenDate = moment(date, "MM/DD/YYYY");
  let startOfYear = moment(`03/01/${date.slice(-4)}`, "MM/DD/YYYY");

  if (givenDate.week() >= 1 && givenDate.week() < 9) {
    let newWeek = givenDate.week() + 52;
    console.log(
      `${date} is week ${newWeek - startOfYear.week() + 1} of the year.`
    );
  } else {
    console.log(
      `${date} is week ${
        givenDate.week() - startOfYear.week() + 1
      } of the year.`
    );
  }
}

getWeekOfYear("4/19/2023");
getWeekOfYear("12/28/2023");
getWeekOfYear("1/2/2023");
getWeekOfYear("1/14/2023");
getWeekOfYear("2/21/2023");
getWeekOfYear("2/28/2023"); // Same week as beginning of the year
