document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = days[currentDate.getDay()];
     const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    document.getElementById("dayOfWeek").textContent = dayOfWeek + ",";
    document.getElementById("date").textContent = `${month} ${day} ${year}`;
  });


  // Deadline date here
  document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = currentDate.getDate()+10;
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    document.querySelector(".current-date").textContent = `${day} ${month} ${year}`;
});

document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const day = currentDate.getDate()+10;
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  document.getElementById("urrent-date2").textContent = `${day} ${month} ${year}`;
});

document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const day = currentDate.getDate()+10;
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  document.getElementById("current-date3").textContent = `${day} ${month} ${year}`;
});

document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const day = currentDate.getDate()+10;
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  document.getElementById("current-date4").textContent = `${day} ${month} ${year}`;
});

document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const day = currentDate.getDate()+10;
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  document.getElementById("current-date5").textContent = `${day} ${month} ${year}`;
});

document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const day = currentDate.getDate()+10;
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  document.getElementById("current-date6").textContent = `${day} ${month} ${year}`;
});

