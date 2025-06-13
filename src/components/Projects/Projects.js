import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Menstrual Health Website"
              description="A Menstrual Health Website is an online platform dedicated to providing accurate, supportive, and accessible information and services related to menstruation and reproductive health."
              ghLink="https://github.com/19/Chatify"
              demoLink="https://chatiy-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Order Management system"
              description="The Angular Order Management System is acomprehensive web application designed to streamline and optimize the process of managing customerorders."
              ghLink="https://github.com/Tanviwasule/ordermanagementsystem"
              demoLink="https://bls.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Automate Task System"
              description="Designedand implemented versatile Python-based solutions to streamline processes, enhance user engagement, andoptimize system efficiency."
              ghLink="https://github.com/Tanviwasule/python-mini-projects"
              demoLink="https://editor.souya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Image Slideshow"
              description="Designedand implemented versatile Python-based solutions to streamline processes, enhance user engagement, andoptimize system efficiency."
              ghLink="https://github.com/Tanviwasule/python-mini-projects"
              demoLink="https://plant49-ai.herkuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cafe Management System"
              description="Designedand implemented versatile Python-based solutions to streamline processes, enhance user engagement, andoptimize system efficiency."
              ghLink="https://github.com/Tanviwasule/python-mini-projects"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Gold price prediction"
              description="Gold price prediction refers to the process of forecasting future gold prices using various techniques such as historical data analysis, geopolitical events, market trends, and advanced computational models."
              ghLink="https://github.com/Tanviwasule/gold-price-prediction"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
