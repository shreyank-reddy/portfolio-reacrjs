import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {link && (
            <Button href={link} target="_blank" variant="primary">
              Visit
            </Button>
          )}
        </div>
      </div>
    </Col>
  )
}
