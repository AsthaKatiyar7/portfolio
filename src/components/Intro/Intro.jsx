import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import './intro.css'
export default function Intro(){
  return (
    <section id="intro" className="intro-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
          <div className='intro-img-wrapper'>
            <img
              src="photo.png" 
              alt= "Name"
              className="intro-image"
              // width="480px"
              // height="480px"
            />
            </div>
          </Col>

          <Col md={6} className="text-center text-md-start">
            <h1 className="intro-heading">Hi, I'm Astha Katiyar</h1>
            <h2 className="intro-typewriter">
              <Typewriter
                words={['B.Tech Final Year Student', 'Competitive Programmer', 'Full Stack Developer']}
                loop={0} 
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


