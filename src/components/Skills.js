import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import c from '../assets/img/c.png'
import python from '../assets/img/python.png'
import java from '../assets/img/java.png'
import web from '../assets/img/web.png'
import data from '../assets/img/data.png'
import ml from '../assets/img/ml.png'
import design from '../assets/img/design.png'
import sql from '../assets/img/sql.png'
import matlab from '../assets/img/matlab.png'
import react from '../assets/img/react.png'
import linux from '../assets/img/linux.png'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container neon-border">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{ color: 'white' }}>Skills</h2>
                        <p style={{ color: 'white' }}>Exploring my skills is like finding a treasure trove of abilities. From solving problems to being creative, diving into what I can do promises a journey of discovery and impressive accomplishments.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C Language</h5>

                            </div>

                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>

                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>JAVA</h5>
                            </div>

                            <div className="item">
                                <img src={web} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={ml} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={design} alt="Image" />
                                <h5>Designer</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQl</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={matlab} alt="Image" />
                                <h5>MATLAB</h5>
                                </div>
                                <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React Js</h5>
                                </div>
                        </Carousel>

                       

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
