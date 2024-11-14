import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa'; // Optional: use icons from react-icons
import './skills.scss';

const skillsData = [
  {
    category: 'Programming Languages',
    photo: 'coding.jpeg', 
    skills: ['C', 'C++', 'Java', 'Python'],
    icon: <FaCode className="skills-icon" /> // Optional: icon for programming languages
  },
  {
    category: 'Development Skills',
    photo: 'dev.jpg', 
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    icon: <FaTools className="skills-icon" /> // Optional: icon for development skills
  },
  {
    category: 'Other Skills',
    photo: 'other.png', 
    skills: ['MySQL', 'Express.js', 'Postman'],
    icon: <FaDatabase className="skills-icon" /> // Optional: icon for other skills
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="text-center mb-5">My Skills</h2>
        <Row>
          {skillsData.map((category, index) => (
            <Col key={index} md={4}>
              <Card className="mb-4 skill-card">
                <Card.Img variant="top" src={category.photo} alt={category.category} />
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    {category.icon} {category.category}
                  </Card.Title>
                  <Card.Text>   
                    {category.skills.join(' | ')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
