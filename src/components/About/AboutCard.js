import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanvi Tarun Wasule </span>
            from <span className="purple"> Maharastra, India.</span>
            <br />
            I am currently a third year student at shri sant gajanan maharaj college of engineering,shegaon.
            <br />
            An Individual who is highly motivated and enthusiastic with a strong foundation in programming and problem-solving, seeking toleverage technical expertise. With experience in developing efficient scripts, automating tasks, and working on real-world projects,a keen interest in software development and data analysis. Quick learner and contribute to impactful solutions in fast-pacedenvironments. Eager to bring innovative ideas and grow as a developer in a challenging role.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
        
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tanviwasule</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
