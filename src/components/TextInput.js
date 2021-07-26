import { Col, Row, Form } from "react-bootstrap";

const TextInput = ({setTextArea}) => {
  return (
    <Row className="pt-4">
      <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="String to decrypt..."
            onChange={e => setTextArea(e.target.value)} />
        </Form.Group>
      </Col>
    </Row>
  );
}

export default TextInput;