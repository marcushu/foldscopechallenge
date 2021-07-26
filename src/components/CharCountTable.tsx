import { Col, Row, Table } from "react-bootstrap";

interface CharcountType {
  char: string
  count: number
}

interface CharCountTableProps {
  lookup: CharcountType[]
}

const CharCountTable = ({lookup}: CharCountTableProps) => {
  return (
    <Row>
      <Col style={{display: "flex", justifyContent: "center"}}>
        <Table size="sm" style={{maxWidth: "300px"}}>
          <thead>
            <tr>
              <th>Character</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {lookup.map(({ char, count }, idx) => 
              <tr key={char + count + idx}>
                <td>{char}</td>
                <td>{count}</td>
              </tr>)}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default CharCountTable;