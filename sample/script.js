// Get reference to the div element
const myDiv = document.getElementById('myDiv');

// Add click event listener to the div
myDiv.addEventListener('click', function() {
  // Get current day (for example)
  let dayOfWeek = new Date().getDay();
  let dayName;

  switch (dayOfWeek) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
  }

  // Display the result
  console.log(`Today is ${dayName}`);
});
