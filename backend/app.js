const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

// Sample events data (replace with actual data fetching from calendar system)
const upcomingEvents = [
  {
    title: "Website Developer",
    date: "2024-01-01",
    location: "Vrindavan, Uttar Pradesh",
    description:
      "A website developer creates and maintains web applications, ensuring functionality, performance, and user experience. They use programming languages like HTML, CSS, and JavaScript to build responsive and interactive websites. Developers collaborate with designers and stakeholders to implement features, fix bugs, and optimize site performance for seamless user navigation.",
  },
  {
    title: "Web Developer",
    date: "2024-02-01",
    location: "Vrindavan, Uttar Pradesh",
    description:
      "A web developer is a professional who designs, builds, and maintains websites. Skilled in programming languages like HTML, CSS, and JavaScript, they create user-friendly and visually appealing sites. Web developers collaborate with teams to implement features, ensure functionality, and optimize performance, contributing to an enhanced online user experience.",
  },
  {
    title: "HTML Developer",
    date: "2024-03-01",
    location: "Vrindavan, Uttar Pradesh",
    description:
      "An HTML developer, often referred to as a frontend developer, specializes in creating the structure and content of web pages using HTML (Hypertext Markup Language). They organize and format the information on websites, ensuring proper hierarchy, semantics, and accessibility. HTML developers work closely with CSS and JavaScript to craft visually appealing and interactive user interfaces.",
  },
  {
    title: "Frontend Developer",
    date: "2024-02-01",
    location: "Vrindavan, Uttar Pradesh",
    description:
      "A frontend developer specializes in creating the visual and interactive elements of a website or web application. Proficient in languages like HTML, CSS, and JavaScript, they translate design concepts into responsive, user-friendly interfaces. Frontend developers collaborate with design and backend teams to ensure a seamless and engaging user experience on the client side.",
  },
  {
    title: "Backend Developer",
    date: "2024-02-01",
    location: "Vrindavan, Uttar Pradesh",
    description:
      "A backend developer focuses on the server-side logic and functionality of websites or web applications. They work with databases, server-side languages (such as Python, Ruby, or Node.js), and server management to ensure data processing, security, and overall application functionality. Backend developers collaborate with frontend teams to deliver a complete and fully functional web solution.",
  },
];

app.get("/api/events", (req, res) => {
  res.json(upcomingEvents);
});

app.get("/api/events/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  const event = upcomingEvents.find((e) => e.title === eventId);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  res.json(event);
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
