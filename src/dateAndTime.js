export { displayFutureDays };

function displayFutureDays() {
  let currentDate = new Date();


  let date24HoursFromNow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

  // Calculate the date and time 48 hours from now
  let date48HoursFromNow = new Date(currentDate.getTime() + 48 * 60 * 60 * 1000);

  // Get the day names for the calculated dates
  let day24HoursFromNow = date24HoursFromNow.toLocaleString('en-US', { weekday: 'long' });
  let day48HoursFromNow = date48HoursFromNow.toLocaleString('en-US', { weekday: 'long' });

return {
    day24HoursFromNow,
    day48HoursFromNow
}
}

