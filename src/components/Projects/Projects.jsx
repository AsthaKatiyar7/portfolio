import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './projects.scss';

const ProjectCard = ({ project, onOpen }) => (
  <Card className="project-card">
    <Card.Img variant="top" src={project.image} alt={project.title} />
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>{project.description}</Card.Text>
      <Button className='card-button' onClick={() => onOpen(project)}>Learn More</Button>
    </Card.Body>
  </Card>
);

const ProjectModal = ({ project, show, onClose }) => (
  <Modal show={show} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>{project.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={project.image} alt={project.title} className="img-fluid mb-3" />
      <p>{project.fullDescription}</p>
      <h5>Technologies Used:</h5>
      <p>{project.technologies.join(', ')}</p>
      <h5>Key Features:</h5>
      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Close</Button>
      <Button variant="primary" href={project.liveLink} target="_blank"  rel="noopener noreferrer">View Live</Button>
      <Button variant="info" href={project.sourceLink} target="_blank"  rel="noopener noreferrer">  Source Code</Button>
    </Modal.Footer>
  </Modal>
);

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Safe Haven - Animal Rescue Platform",
      description: "A platform connecting stray animals with loving homes.",
      fullDescription: "Safe Haven is a comprehensive animal rescue platform designed to streamline the process of connecting stray animals with potential adopters. It provides a user-friendly interface for both rescuers and adopters, making the adoption process more efficient and accessible.",
      image: "/project1.png?height=200&width=400",
      technologies: ["React", "React-Bootstrap", "SCSS", "MongoDB", "Axios"],
      features: [
        "User-friendly interface for browsing available animals",
        "Detailed profiles for each animal",
        "Application system for potential adopters",
        "Admin dashboard for managing listings and applications"
      ],
      liveLink: "https://animal-rescue-mu.vercel.app/",
      sourceLink: "https://github.com/AsthaKatiyar7/animal-rescue"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Showcase of projects, skills, and professional work.",
      fullDescription: "My personal portfolio website, showcasing projects, skills, and technical expertise. This site serves as a dynamic resume, featuring a responsive design, interactive elements, and a detailed projects section.",
      image: "/project2.png?height=200&width=400",
      technologies: ["React", "React-Bootstrap", "Vite", "SCSS"],
      features: [
        "Project showcase with images and descriptions",
        "Responsive and interactive design",
        "Contact form with validations",
        "Detailed tech stack and feature highlights"
      ],
      liveLink: "portfolio-ruddy-omega-57.vercel.app",  // Link to the live site
      sourceLink: "https://github.com/AsthaKatiyar7/portfolio"  // Link to the source code repository
    }
  ];

  return (
    <Container className="projects-section" id = "projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map(project => (
          <Col key={project.id}>
            <ProjectCard project={project} onOpen={setSelectedProject} />
          </Col>
        ))}
      </Row>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          show={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </Container>
  );
};

export default Project;