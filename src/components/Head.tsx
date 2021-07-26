import { Col, Row } from "react-bootstrap";

const Head = () => {
  return (
    <Row style={{color: "white", backgroundColor:"gray", borderRadius: "8px", marginTop: "8px"}}>
      <Col className="text-center p-4">
        <h1>Coding Challenge</h1>
        <div className="fw-lighter">
          Marcus Hurn <br />
          marcusphurn@gmail.com
        </div>
      </Col>
    </Row>
  );
}

export default Head;