document.addEventListener("DOMContentLoaded", () => {
  const eventsContainer = document.getElementById("events-container");
  // Fetch events from backend API for data showing the dispaly
  fetch("http://localhost:3000/api/events")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((events) => {
      // Display events on the webpage and i was giveing the span tag class for giving the title color 
      events.forEach((event) => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `
          <strong class="event-title">${event.title}</strong><br>
          <span class="event-date">${event.date}</span><br>
          <span class="event-location">${event.location}</span><br>
          <div class="short-description event-description">${event.description.slice(
            0,
            100
          )}... <a href="#" class="read-more" data-event-id="${
          event.title
        }">Read More</a></div>
        `;
        // Adding click event to navigate to the detailed view webpage when user click to the card of the events then he navigate top the Events details Page
        eventElement.addEventListener("click", () => {
          window.location.href = `event-details.html?eventId=${event.title}`;
        });

        eventsContainer.appendChild(eventElement);
      });
      // Add click event to "Read More" links, when user click to the "read more " then also showing the Events details webpage

      document.querySelectorAll(".read-more").forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const eventId = event.target.dataset.eventId;
          window.location.href = `event-details.html?eventId=${eventId}`;
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
    });
});
