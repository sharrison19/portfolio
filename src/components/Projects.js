import React from "react";
import contactsbackground from "../images/contactsappbackground.png";
import reelnortheastbackground from "../images/reelnortheastbackground.jpg";
import seasthedaybackground from "../images/seasthedaybackground.jpg";

const projectsData = [
  {
    title: "Reel Northeast",
    cardTitle: "Dive into Reel Northeast",
    backgroundImage: "url(" + reelnortheastbackground + ")",
    shortDescritpion:
      "Connect with anglers, explore captivating fish species, and engage in interactive discussions. Join the thriving community and elevate your fishing experience!",
    longDescription: (
      <div>
        <p>
          Reel Northeast is a fishing forum website where anglers can connect,
          share fishing experiences, and exchange tips and tricks. The
          application offers secure user authentication using JWT (JSON Web
          Tokens) and supports features like user registration, login, profile
          management, and forum thread operations. It is built using Node.js
          with the Express framework and utilizes a MongoDB database for data
          storage.
        </p>
        <p>
          The heart of Reel Northeast, the Forum page, provides a thriving
          community for fishing enthusiasts to engage in discussions and share
          their valuable fishing experiences. The user-friendly interface offers
          convenient search, category filtering, and sorting options based on
          the newest, oldest, most views, and most comments. Registered users
          can actively contribute to the dynamic community by creating new
          threads, fostering interactive and lively discussions among anglers.
        </p>
        <p>
          One of the standout features of the forum application backend is its
          implementation of a recursive commenting system, allowing users to
          engage in multi-level discussions through comments and replies. This
          recursive structure enables users to respond to existing comments,
          fostering in-depth and interactive conversations within each thread.
        </p>
        <p>
          The State page enhances the forum application's potential by
          dynamically fetching and displaying the most recent threads related to
          the selected state. With an intuitive interface showcasing essential
          thread details, such as title, author, date, comments, and views,
          users are encouraged to actively participate in discussions.
          Seamlessly navigating to detailed thread views further enriches the
          user experience, making the State page an invaluable asset to drive
          user engagement and satisfaction.
        </p>
        <p>
          On the other hand, the Species page takes users on an immersive
          journey through the captivating world of fish species. The species
          cards feature a stunning flip animation, with an enticing image of the
          fish on the front and detailed descriptions on the back. Users can
          conveniently filter between saltwater and freshwater species, adding
          focus and convenience to their discovery. This interactive and
          visually appealing exploration makes the Species page a standout
          feature for the application's aquatic-themed content.
        </p>
        <p>
          The Reel Northeast Profile page allows anglers to create and manage
          their profiles, enabling them to update their information, connect
          their social media accounts, and upload profile pictures using
          Cloudinary.
        </p>
        <p>
          Together, these pages elevate the forum application's potential,
          providing a rich and rewarding experience for users.
        </p>
      </div>
    ),
    technologies: [
      "React",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JSON Web Token",
      "Cloudinary",
      "Axios",
      "react-router-dom",
      "useContext",
    ],

    githubLink: "https://github.com/sharrison19/reelnortheast-db",
    appLink: "https://reel-northeast-ee6588df16dc.herokuapp.com/",
  },
  {
    title: "Seas the Day",
    cardTitle: "Seas the Day With This Marine Weather App",
    backgroundImage: "url(" + seasthedaybackground + ")",
    shortDescritpion:
      "Embark on nautical adventures with this marine weather app! Stay ahead of tides and navigate smoothly with hourly forecasts for your ocean pursuits.",
    longDescription: "Description of Seas the Day project.",
    technologies: ["React", "Firebase", "Redux", "CSS"],
    githubLink: "https://github.com/your-github/seas-the-day",
    appLink: "https://seas-the-day-app.com",
  },
  {
    title: "Contact Manager App",
    cardTitle: "Discover a Secure Contact Management App",
    backgroundImage: "url(" + contactsbackground + ")",
    shortDescritpion:
      "Connect with contacts, manage personal details, and streamline communication with ease and confidence.",
    longDescription:
      "Explore the Contact Manager app, a robust platform for seamless contact management. Effortlessly organize and access vital contact information, including names, emails, phone numbers, websites, and company details. Securely store addresses, cities, states, zip codes, and countries, ensuring efficient communication with individuals and organizations. With user authentication powered by JWT (JSON Web Tokens), data remains confidential and accessible only to authorized users. The app enables users to create, edit, and delete contacts, effortlessly syncing data with MongoDB, ensuring data consistency and availability. Leveraging bcrypt for password hashing, user information is securely stored, and account creation and login processes are fortified. The Contact Manager offers a user-friendly interface, intuitive navigation, and convenient search functionality, streamlining contact access and enhancing productivity. Embracing a RESTful API design, the backend efficiently handles contact operations, utilizing Express, a flexible Node.js framework. CORS integration ensures secure cross-origin communication with the front end, while the use of environment variables enhances configurability and security. With this robust tech stack, the Contact Manager delivers an exceptional experience for contact management needs.",
    technologies: [
      "React",
      "Redux",
      "CSS",
      "Node",
      "Express",
      "Body-parser",
      "CORS",
      "Mongoose",
      "MongoDB",
      "Bcryptjs",
      "Middleware",
      "JSON Web Tokens",
    ],
    githubLink: "https://github.com/your-github/contacts",
    appLink: "https://contacts-app.com",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-list-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-item project-background-image"
            style={{ backgroundImage: project.backgroundImage }}
          >
            <h3 className="project-title">{project.cardTitle}</h3>
            <p className="project-short-description">
              {project.shortDescritpion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
