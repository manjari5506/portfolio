import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {SiRedux,SiExpress,SiChakraui } from "react-icons/si";

function Techstack() {
  return (<div id="skills" >
    <br/>
    <br/>
    <br/>
    <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
    <span className="purple">Skills</span> 
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
    <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p>Express</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>Mongodb</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Nodejs</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>Html5</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p>Css3</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui />
        <p>Chakra-UI</p>
      </Col>
    </Row>
    </div>
  );
}

export default Techstack;