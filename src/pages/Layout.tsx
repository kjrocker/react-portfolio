import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Footer, NavigationBar } from '../components';
import styled from '../theme';
import HomePage from './Home';
import Resume from './Resume';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FlexFooter = styled(Footer)`
  flex-shrink: 0;
`;

const FlexContent = styled.div`
  flex: 1 0 auto;
  padding-bottom: 2%;
  background-color: ${(props) => props.theme.background};
`;

const SiteContent = (props: any) => {
  return (
    <Container>
      <FlexContent>
        <NavigationBar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/" component={HomePage} />
        </Switch>
      </FlexContent>
      <FlexFooter />
    </Container>
  );
};

export default SiteContent;
