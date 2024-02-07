export { displayFutureDays, displayFutureDay };


function displayFutureDays() {
  let currentDate = new Date();

  let date24HoursFromNow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  let date48HoursFromNow = new Date(currentDate.getTime() + 48 * 60 * 60 * 1000);
  let date72HoursFromNow = new Date(currentDate.getTime() + 72 * 60 * 60 * 1000);
  let date96HoursFromNow = new Date(currentDate.getTime() + 96 * 60 * 60 * 1000);
  let date120HoursFromNow = new Date(currentDate.getTime() + 120 * 60 * 60 * 1000);
  let date148HoursFromNow = new Date(currentDate.getTime() + 148 * 60 * 60 * 1000);



  let day24HoursFromNow = formatDateWithDay(date24HoursFromNow);
  let day48HoursFromNow = formatDateWithDay(date48HoursFromNow);
  let day72HoursFromNow = formatDateWithDay(date72HoursFromNow);
  let day96HoursFromNow = formatDateWithDay(date96HoursFromNow);
  let day120HoursFromNow = formatDateWithDay(date120HoursFromNow);
  let day148HoursFromNow = formatDateWithDay(date148HoursFromNow);

  return {day24HoursFromNow,
          day48HoursFromNow,
          day72HoursFromNow,
          day96HoursFromNow,
          day120HoursFromNow,
          day148HoursFromNow}

};

function displayFutureDay(hours){
  let currentDate = new Date();
  let date = new Date(currentDate.getTime() + hours * 60 * 60 * 1000);
  let formattedDate = formatDateWithDay(date);

  return { formattedDate }
}


// Function to format the date with day name and ordinal suffix for the day
function formatDateWithDay(date) {
  let options = { weekday: 'long', day: 'numeric', month: 'short' };
  let formattedDate = date.toLocaleString('en-US', options);

  // Extract the day from the formatted date
  let day = date.getDate();

  // Add the ordinal suffix to the day
  let ordinalSuffix = getOrdinalSuffix(day);
  formattedDate = formattedDate.replace(/\d+/, day + ordinalSuffix);

  return formattedDate;
}

// Function to get the ordinal suffix for a day (e.g., 1st, 2nd, 3rd)
function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}