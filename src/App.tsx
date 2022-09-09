import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import CharDetails from './components/CharDetails';
import Header from './components/Header';
import ItemList from './components/ItemList'
import RandomChar from './components/RandomChar'

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <Col lg='3'>
            <ItemList />
          </Col>
          <Col>
            <CharDetails/>
          </Col>
          <Col>
            <RandomChar/>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default App;
