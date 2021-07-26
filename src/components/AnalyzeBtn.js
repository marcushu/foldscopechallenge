import { Col, Row, Button } from "react-bootstrap";

const AnalyzeBtn = ({countChars}) => {
  return (
    <Row className="pb-4">
      <Col className="text-center">
        <span style={{ fontSize: "24px" }}>Enter text above, then </span>
        <Button variant="secondary" onClick={countChars}>Analyze</Button>
      </Col>
    </Row>
  )
}

export default AnalyzeBtn;