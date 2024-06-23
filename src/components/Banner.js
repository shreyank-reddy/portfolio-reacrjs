import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumeImg from "../assets/img/resumeimg11.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from "../assets/Resume_Shreyank.pdf";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Rao Shreyank Reddy"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2 style={{ color: "black" }}>{`Hi! I'm `}<span className="txt-rotate" dataPeriod="1000" data-rotate='["Rao Shreyank Reddy"]'><span className="wrap">{text}</span></span></h2>

                  <p>Open Source Contributor | Fervent Team Leader | 2⭐ CodeChef | Proficient in Python, Java, Web Dev, SQL,Data Science | IT Student at Anurag University | National Level Player.</p>
                  <h4 style={{ color: "black" }}>About:</h4>
                  <p>With a background as a national-level sports player and an ambitious engineering student specializing in IT, I offer a blend of technical expertise, leadership, and effective communication. Eager to tackle new challenges, my skills span web development, machine learning, and data science, making me well-equipped to contribute to dynamic work environments. Committed to continual growth, I'm passionate about leveraging technology for innovation and success. Let's connect to discuss how I can add value to your team.</p>
                  <h4 style={{ color: "black" }}>Personal Details:</h4>
                  <p style={{ color: "black"}}><span style={{ color: "red" }}>Email:</span>raoshreyankreddy@gmail.com</p>
                  <p style={{ color: "black"}}><span style={{ color: "red" }}>Phone No:</span>7013220791</p>
                  <button
                    className="resume-button"
                    onClick={() => console.log('connect')}
                    style={{ backgroundColor: '#4A90E2', color: 'white', textDecoration: 'none', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
                  >
                    <a href={resume} download target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                      Resume
                    </a> <ArrowRightCircle size={25} style={{ marginLeft: '10px' }} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={resumeImg}
        alt="Resume Img"
        className="img-fluid"
        style={{ maxWidth: '90%', height: '600px', borderRadius: '100px', marginTop: '10px' }}
      />
    </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
