import { Container, Row } from 'react-bootstrap';
import ResultsTable from './components/ResultsTable';

function App() {
  return (
    <Container fluid>
      <Row>
        <ResultsTable/>
      </Row>
    </Container>
  );
}

export default App;
