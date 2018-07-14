import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Banner from './Banner';
import Biography from './Biography';
import BlurbRow from './BlurbRow';
import Contact from './Contact';

const Home: React.SFC<{}> = (props) => {
  return (
    <React.Fragment>
      <Banner />
      <Container>
        <Row>
          <Biography sm={8} />
          <Contact sm={4} />
        </Row>
        <BlurbRow />
      </Container>
    </React.Fragment>
  );
};

export default Home;
