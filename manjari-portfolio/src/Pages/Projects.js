import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/17R6GQ0/Rodan.png"
              title="Rodan+Fields Clone"
              description="This is the clone of Rodan+Fields website,a platform primarily used for skincare regime and consultance. You can buy skincare/beauty products and refer dermatolodists"
              tech="Tech-Stacks"
              techD="React | Redux | Node.js | Chakra-UI | AWS "
              link="https://master.d23z4v79tx0nu6.amplifyapp.com/"
              a="https://github.com/manjari5506/wonderful-sound-2096"
            />
        </Col>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/sKVSdGk/chatapp.png"
              title="Massenger Chat-App"
              description="Its a mini Chat application which facilitates real time chatting/messaging feature with your friends"
              tech="Tech-Stacks"
              techD="React | Redux | Node.js | Styled-components | Socket-IO "
              link="https://master.d3mgm6ugvhrum8.amplifyapp.com/"
              a="https://github.com/manjari5506/chat-application"
            />
        </Col>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/PjtMFkn/frontend.png"
              title="Frontend-Masters Clone"
              description="FrontendMasters, which is a online educational platform providing courses on frontend technologies ,coding languages and many more in the similar field. As per reviews from users across the globe, their content is apt for students to learn."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | MongoDB | Express | NodeJS | AWS"
              link="https://effortless-pie-90d5c4.netlify.app/"
              a="https://github.com/manjari5506/frontandmaster-clone"
            />
        </Col>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/wgfbbWM/Lumen5port.png"
              title="Lumen5 Clone"
              description="Lumen5 is a website where a user can easily make videos for content marketing, through leadership and brand awareness in a snap."
              tech="Tech-Stacks"
              techD="React | Redux | Stylen-components | MongoDB | Express | Node.js"
              link="https://lumen5-murex.vercel.app/"
              a="https://github.com/manjari5506/lumen5"
            />
          </Col>

        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://i.ibb.co/pwRyt44/Credofront.png"
              title="Credo-Beauty Clone"
              description="At Credo-Beauty, It is a US based beauty and skincare products website founded in 2014 by Annie Jackson(co-founder),one of the leading retailers of clean cosmetics.By clean they refer to toxin-free and sustainable products. "
              tech="Tech-Stacks"
              techD="Html | Javascript | NodeJS | Css "
              link="https://luxury-otter-de9ba2.netlify.app/"
              a="https://github.com/manjari5506/creado"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
