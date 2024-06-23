import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Modal, Button } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import Card from './Card'; // Assuming Card component is defined in Card.js
import 'animate.css';
import exp1 from '../assets/img/exp-1.png';
import exp2 from '../assets/img/exp-2.png';

import jnp1 from '../assets/certificate/j-np.png';
import jnp2 from '../assets/certificate/p-np.png';

import aur from '../assets/certificate/au-r.png';
import der from '../assets/certificate/de-r.png';
import mmr from '../assets/certificate/mm-r.png';
import pmr from '../assets/certificate/pm-r.png';

import oml from '../assets/certificate/o-ml.png';
import sml from '../assets/certificate/s-ml.png';
import dli from '../assets/certificate/d-li.png';
import fli from '../assets/certificate/f-li.png';

import ccc from '../assets/certificate/cc-c.png';
import ec from '../assets/certificate/e-c.png';
import ic from '../assets/certificate/i-c.png';
import pycc from '../assets/certificate/py-cc.png';
import sc from '../assets/certificate/s-c.png';

import omll from '../assets/certificate/o-ml.png';
import dml from '../assets/certificate/d-ml.png';
import smll from '../assets/certificate/s-ml.png';
import iml from '../assets/certificate/i-ml.png';

import gcs from '../assets/certificate/g-cs.png';





export const Projects = () => {
  const projects = [
    {
      title: 'FASTY.20',
      link: 'https://shreyank-reddy.github.io/online_vehicles/',
      imgUrl: 'https://i.pinimg.com/originals/8a/f4/88/8af48821315b7974556a2b44bbb6e7aa.jpg',
    },
    {
      title: 'Photo Editor',
      link: 'https://shreyank-reddy.github.io/Photo_Editor/',
      imgUrl: 'https://helpx.adobe.com/content/dam/help/en/express/how-to/edit-text-express/edit-text-express-step1_900x506.jpg',
    },
    {
      title: 'Health-Check&Track',
      link: 'https://shreyank-reddy.github.io/health_check/',
      imgUrl: 'https://ourworldindata.org/images/published/Thumbnail-SDG-3.png',
    },
    {
      title: 'Titanic Classification',
      link: 'https://github.com/shreyank-reddy/Titanic-Classification',
      imgUrl: 'https://c4.wallpaperflare.com/wallpaper/621/139/660/night-ice-uk-transatlantic-steamer-titanic-hd-wallpaper-preview.jpg',
    },
    {
      title: 'Profile(HTML,CSS & JavaScript)',
      link: 'https://shreyank-reddy.github.io/portfolio-/',
      imgUrl: 'https://st.depositphotos.com/1008096/57720/i/450/depositphotos_577208356-stock-photo-portfolio-text-quote-card-concept.jpg',
    },
    {
      title: 'Crop Prediction',
      link: 'https://github.com/shreyank-reddy/crop_prediction',
      imgUrl: 'https://st.depositphotos.com/1031062/1932/i/450/depositphotos_19326803-stock-photo-corn-field.jpg',
    },
  ];

  const certifications = [
    {
      title: 'Certificate 1',
      imgSrc: 'https://assets.thehansindia.com/h-upload/2021/01/20/1600x960_1025790-nptel.jpg',
      cards: [
        { imgSrc: jnp1, title: 'Programming in Java' },
        { imgSrc: jnp2, title: 'Python for Data Science' },
        
      ]
    },
    // Add more certifications as needed

    {
      title: 'Certificate 2',
      imgSrc: 'https://cdn.mindmajix.com/courses/rapidminer-training.png',
      cards: [
        { imgSrc: aur, title: 'Applications & Use Cases Master Certification' },
        { imgSrc: der, title: 'Data Engineering Master Certification' },
        { imgSrc: mmr, title: 'Machine Learning Master Certification' },
        { imgSrc: pmr, title: 'Platform Administration Master Certification' },
        // Add more cards as needed
      ]
    },
    {
      title: 'Certificate 3',
      imgSrc: 'https://1000logos.net/wp-content/uploads/2016/11/cisco-emblem.jpg',
      cards: [
        { imgSrc: ccc, title: 'Introduction to Data Science' },
        { imgSrc:  ec, title: 'Enterprise Networking , Security and Automation' },
        { imgSrc: ic, title: 'Introduction to Networks' },
        { imgSrc:pycc , title: 'PCAP: Programming Essentials in Python' },
        { imgSrc:sc  , title: 'Switching , Routing and Wireless Essentials' },
      ]
    },
    {
      title: 'Certificate 4',
      imgSrc: 'https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-9.png',
      cards: [
        { imgSrc:dli , title: 'Introduction to Data Science' },
        { imgSrc: fli, title: 'Getting Started as a Full-Stack WebDeveloper' },
        // Add more cards as needed
      ]
    },
    {
      title: 'Certificate 5',
      imgSrc: 'https://banner2.cleanpng.com/20180703/yrf/kisspng-matlab-simulink-signal-processing-programming-lang-cube-island-online-survival-3d-5b3b394d2f1946.2068935715306079491929.jpg',
      cards: [
        { imgSrc: omll, title: 'Object-Oriented Programming Onramp' },
        { imgSrc: dml, title: 'Deep Learning Onramp' },
        { imgSrc: smll, title: 'Signal Processing Onramp' },
        { imgSrc: iml, title: 'Image Processing Onramp' },
        // Add more cards as needed
      ]
    },
    {
      title: 'Certificate 6',
      imgSrc: 'https://logowik.com/content/uploads/images/coursera4660.jpg',
      cards: [
        { imgSrc: gcs, title: 'Getting Started with Azure DevOps Boards' },
        // Add more cards as needed
      ]
    },
  ];

  const [showCertModals, setShowCertModals] = useState(Array(certifications.length).fill(false));
  const [activeCertIndex, setActiveCertIndex] = useState(-1);

  const handleCertModalClose = () => {
    setShowCertModals(Array(certifications.length).fill(false));
    setActiveCertIndex(-1);
  };

  const handleCertModalShow = (index) => {
    setShowCertModals(Array(certifications.length).fill(false));
    setShowCertModals(showCertModals => {
      showCertModals[index] = true;
      return [...showCertModals];
    });
    setActiveCertIndex(index);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Explore</h2>
                  <p>
                    Want to learn more about me? Take a look at my projects, experience, and certifications! They
                    showcase the skills and knowledge I've gained and how I can contribute.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
  <Nav.Item>
    <Nav.Link eventKey="first" className="n1eon-border">Projects</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="second" className="n1eon-border">Experience</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="third" className="n1eon-border">Certification</Nav.Link>
  </Nav.Item>
</Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} title={project.title} imgUrl={project.imgUrl} link={project.link} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card mb-3">
                                <img src={exp1} style={{ maxWidth: '100%', height: '100%' }} alt="Experience 1" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card mb-3">
                                <img src={exp2} style={{ maxWidth: '100%', height: '100%' }} alt="Experience 2" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {certifications.map((certification, index) => (
                            <Col key={index} md={4} className="mb-10">
                              <div className="card">
                                <img
                                  src={certification.imgSrc}
                                  style={{ maxWidth: '100%', height: 'auto' }}
                                  alt={certification.title}
                                />
                                <Button
                                  variant="primary"
                                  onClick={() => handleCertModalShow(index)}
                                  className="mt-2"
                                >
                                  View Certificates
                                </Button>
                              </div>
                            </Col>
                          ))}
                        </Row>
                        {certifications.map((certification, index) => (
                          <Modal key={index} show={showCertModals[index]} onHide={handleCertModalClose} size="xl">
                            <Modal.Header closeButton>
                              <Modal.Title size="xl">{certification.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Container>
                                <Row>
                                  {certification.cards.map((card, cardIndex) => (
                                    <Col key={cardIndex} md={3} className="mb-3">
                                      <Card imgSrc={card.imgSrc} title={card.title} />
                                    </Col>
                                  ))}
                                </Row>
                              </Container>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleCertModalClose}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        ))}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
