document.addEventListener("DOMContentLoaded", () => {
  const eventDetailsContainer = document.getElementById(
    "event-details-container"
  );
  const eventId = new URLSearchParams(window.location.search).get("eventId");
  // Fetch detailed event data from the backend
  fetch(`http://localhost:3000/api/events/${eventId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((event) => {
      // Update the UI with detailed event details page
      const eventTitleElement = document.getElementById("event-title");
      const eventDateElement = document.getElementById("event-date");
      const eventLocationElement = document.getElementById("event-location");
      const eventDescriptionElement =
        document.getElementById("event-description");

      // span tag contain class for give the color of the title in the css file
      eventTitleElement.innerHTML = `<span class="heading">Event:</span> ${event.title}`;
      eventDateElement.innerHTML = `<span class="date">Date:</span> ${event.date}`;
      eventLocationElement.innerHTML = `<span class="loaction">Location:</span> ${event.location}`;
      eventDescriptionElement.innerHTML = `<span class="description">Description:</span> ${event.description}`;
    })
    .catch((error) => {
      console.error("Error fetching detailed event:", error);
    });
  // Define the Back function when user click to the back button then the webpage is navigate to the home page means index.html page
  window.goBack = () => {
    // Navigate back to the events list home  page
    window.location.href = "index.html";
  };
});
