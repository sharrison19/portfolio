const contactsbackground = require("../images/contactsappbackground.png");
const reelnortheastbackground = require("../images/reelnortheastbackground.jpg");
const seasthedaybackground = require("../images/seasthedaybackground.jpg");
const rneforum = require("../images/rneforum.png");
const rnehome = require("../images/rnehome.png");
const rnethread = require("../images/rnethread.png");
const rnespecies = require("../images/rnespecies.png");
const rnestate = require("../images/rnestate.png");
const rnestates = require("../images/rnestates.png");
const rneprofile = require("../images/rneprofile.png");
const contactsappListExample = require("../images/contactsapp1.png");
const contactsappAddContact = require("../images/contactsapp2.png");
const contactsappLogin = require("../images/contactsapp3.png");
const seasthedayMarineWeather = require("../images/seastheday1.png");
const seasthedayTides = require("../images/seastheday2.png");

const projectsData = [
  {
    id: "reelnortheast",
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
        <img
          src={rnehome}
          alt="Reel Northeast Home"
          className="project-screenshot"
        />
        <p>
          The heart of Reel Northeast, the Forum page, provides a thriving
          community for fishing enthusiasts to engage in discussions and share
          their valuable fishing experiences. The user-friendly interface offers
          convenient search, category filtering, and sorting options based on
          the newest, oldest, most views, and most comments. Registered users
          can actively contribute to the dynamic community by creating new
          threads, fostering interactive and lively discussions among anglers.
        </p>
        <img
          src={rneforum}
          alt="Reel Northeast Forum"
          className="project-screenshot"
        />
        <p>
          One of the standout features of the forum application backend is its
          implementation of a recursive commenting system, allowing users to
          engage in multi-level discussions through comments and replies. This
          recursive structure enables users to respond to existing comments,
          fostering in-depth and interactive conversations within each thread.
        </p>
        <img
          src={rnethread}
          alt="Reel Northeast Thread"
          className="project-screenshot"
        />
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
        <img
          src={rnestates}
          alt="Reel Northeast States"
          className="project-screenshot"
        />
        <br />
        <img
          src={rnestate}
          alt="Reel Northeast State"
          className="project-screenshot"
        />
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
        <img
          src={rnespecies}
          alt="Reel Northeast Species"
          className="project-screenshot"
        />
        <p>
          The Reel Northeast Profile page allows anglers to create and manage
          their profiles, enabling them to update their information, connect
          their social media accounts, and upload profile pictures using
          Cloudinary.
        </p>
        <img
          src={rneprofile}
          alt="Reel Northeast Profile"
          className="project-screenshot"
        />
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
    id: "seastheday",
    title: "Seas the Day",
    cardTitle: "Seas the Day With This Marine Weather App",
    backgroundImage: "url(" + seasthedaybackground + ")",
    shortDescritpion:
      "Embark on nautical adventures with this marine weather app! Stay ahead of tides and navigate smoothly with hourly forecasts for your ocean pursuits.",
    longDescription: (
      <div>
        <p>
          Seas the Day is an advanced marine weather application that empowers
          users with real-time weather insights for coastal regions and
          waterways. This professional-grade app harnesses the power of the
          World Weather Online API to provide accurate and up-to-date marine
          weather data, ensuring safe and informed ocean adventures.
        </p>
        <p>
          Seamlessly integrated with the Google Maps API, Seas the Day offers an
          intuitive map interface, enabling users to effortlessly select their
          desired locations for weather exploration. With just a click on the
          map, users gain access to vital weather information for their chosen
          coordinates.
        </p>
        <img
          src={seasthedayMarineWeather}
          alt="Seas the Day Marine Weather"
          className="project-screenshot"
        />
        <p>
          The user-friendly interface presents two key features: Marine Weather
          and Tides. In the Marine Weather section, users receive comprehensive
          data, including temperature, swell height, wind speed, visibility, and
          more, for their specified location and time. Meanwhile, the Tides
          feature provides valuable tide-related information, aiding mariners in
          planning their activities with precision.
        </p>
        <img
          src={seasthedayTides}
          alt="Seas the Day Tides"
          className="project-screenshot"
        />
        <p>
          As users interact with the map and explore different regions, the app
          dynamically updates the displayed marine weather and tide data,
          ensuring real-time accuracy. Behind the scenes, the app employs the
          secure World Weather Online API, utilizing the provided API key to
          fetch and process data efficiently.
        </p>
        <p>
          Seas the Day has been crafted with a focus on professionalism, making
          it a valuable tool for ocean enthusiasts, marine industry
          professionals, and water sports enthusiasts alike. The app's sturdy
          design, seamless functionality, and responsiveness exemplify its
          suitability for diverse professional use cases.
        </p>
        <p>
          Elevate your maritime experiences and make well-informed decisions
          with Seas the Day. Stay ahead of weather patterns, plan your ocean
          pursuits with confidence, and navigate smoothly through coastal
          adventures using this cutting-edge marine weather app.
        </p>
      </div>
    ),

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Google Maps API",
      "World Weather Online API",
      "JSON",
      "Fetch API",
      "Node.js",
      "Express",
      "RESTful API",
      "JWT (JSON Web Tokens)",
      "MongoDB",
      "HTML",
    ],

    githubLink: "https://github.com/your-github/seas-the-day",
    appLink: "https://seas-the-day-app.com",
  },
  {
    id: "contactmanager",
    title: "Contact Manager App",
    cardTitle: "Discover a Secure Contact Management App",
    backgroundImage: "url(" + contactsbackground + ")",
    shortDescritpion:
      "Connect with contacts, manage personal details, and streamline communication with ease and confidence.",
    longDescription: (
      <div>
        <p>
          Explore the Contact Manager app, a platform for seamless contact
          management. Effortlessly organize and access vital contact
          information, including names, emails, phone numbers, websites, and
          company details. Securely store addresses, cities, states, zip codes,
          and countries, ensuring efficient communication with individuals and
          organizations. With user authentication powered by JWT (JSON Web
          Tokens), data remains confidential and accessible only to authorized
          users.
        </p>
        <p>
          The Contact Manager provides a login page that ensures only
          authenticated users can access their contacts securely. Users can sign
          up for a new account or log in with their existing credentials. The
          login system leverages bcrypt for password hashing, safeguarding user
          information from unauthorized access.
        </p>
        <img
          src={contactsappLogin}
          alt="Contacts Manager Login"
          className="project-screenshot"
        />
        <p>
          Once authenticated, users can take advantage of the user-friendly
          interface to perform various contact management operations. The app
          enables users to effortlessly create, edit, and delete contacts,
          making it easy to keep the contact list up-to-date. Any changes made
          to the contact list are automatically synced with the MongoDB
          database, ensuring data consistency and availability across devices
          and sessions.
        </p>
        <img
          src={contactsappListExample}
          alt="Contacts Manager List"
          className="project-screenshot"
        />
        <p>
          The Contact Manager also provides a feature-rich "Add Contact" form
          where users can enter detailed information about new contacts. The
          form includes fields for names, emails, phone numbers, websites,
          addresses, and more. Users can organize contacts with additional
          details like company information, ensuring that all relevant
          information is conveniently accessible in one place.
        </p>
        <img
          src={contactsappAddContact}
          alt="Contacts Manager Add Contact"
          className="project-screenshot"
        />
        <p>
          Embracing a RESTful API design, the backend efficiently handles
          contact operations, utilizing Express, a flexible Node.js framework.
          CORS integration ensures secure cross-origin communication with the
          front end, while the use of environment variables enhances
          configurability and security. With this excellent tech stack, the
          Contact Manager delivers an exceptional experience for contact
          management needs.
        </p>
      </div>
    ),

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

export default projectsData;
