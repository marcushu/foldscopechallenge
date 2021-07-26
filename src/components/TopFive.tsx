import { Col, Row } from "react-bootstrap";
import CharCountTable from "./CharCountTable";

interface CharcountType {
  char: string
  count: number
}
interface TopFiveProps {
  topFiveCharacters: CharcountType[]
}

const TopFive = ({ topFiveCharacters }: TopFiveProps) => {
  return (
    <Row style={{border: "solid", borderRadius: "8px", borderColor: "gray", marginBottom: "25px"}}>
      <Col md={6} style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <span style={{ fontSize: "22px" }}>The five most common characters.</span>
      </Col>
      <Col md={6}>
        <CharCountTable lookup={topFiveCharacters} />
      </Col>
    </Row>
  )
}

export default TopFive;