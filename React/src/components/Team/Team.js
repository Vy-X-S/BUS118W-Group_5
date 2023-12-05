import React from "react";
import "./Team.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const teamMembers = [
  {
    id: 1,
    name: "Vinh Nguyen Ngo",
    role: "Web Developer, UI/UX Designer",
    description: "Nguyen is a skilled web developer with expertise in front-end technologies.",
    // image: "team-member1.jpg",
  },
  {
    id: 2,
    name: "Mikhail Ocampo",
    role: "Web Developer, UX/UI Designer",
    description: "Mikhail is a talented designer passionate about creating delightful user experiences.",
    // image: "team-member2.jpg",
  },
  {
    id: 3,
    name: "Jerry Tseng",
    role: "",
    description: "",
    // image: "team-member3.jpg",
  },
  {
    id: 4,
    name: "Matthew Whallen",
    role: "",
    description: "",
    // image: "team-member4.jpg",
  },
  {
    id: 5,
    name: "Matt",
    role: "",
    description: "",
    // image: "team-member5.jpg",
  },
  {
    id: 6,
    name: "Joseph Huynh",
    role: "",
    description: "",
    // image: "team-member6.jpg",
  },
];

const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="team-member">
      {/* <img src={image} alt={`Team Member: ${name}`} /> */}
      <div className="member-info">
        <div className="member-name">{name}</div>
        <div className="member-role">{role}</div>
        <div className="member-description">{description}</div>
      </div>
    </div>
  );
};

function Team() {
  return (
    <div>
      <Header />
      <div className="teamMainContainer">
        <h1>Our Team</h1>
        <div className="team-container">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
