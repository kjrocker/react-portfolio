import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Container, Nav } from 'reactstrap';
import { withText } from '../../i18next';
import { invertTheme, ThemeProvider } from '../../theme';
import { Navbar, NavbarBrand, NavLink } from '../Navigation/styles';
import StickyFooter from './StickyFooter';

export interface FooterProps extends React.BaseHTMLAttributes<{}> {
  copyright: string;
}

const Footer: React.SFC<FooterProps> = (props) => (
  <ThemeProvider theme={invertTheme}>
    <StickyFooter {...props}>
      <Container>
        <Navbar>
          <NavbarBrand>{props.copyright}</NavbarBrand>
          <Nav>
            <NavLink to="">Email</NavLink>
            <NavLink to="">Source</NavLink>
          </Nav>
        </Navbar>
      </Container>
    </StickyFooter>
  </ThemeProvider>
);

const mapText = (t: TranslationFunction) => ({
  copyright: t('common:footer:copyrightText', { year: new Date().getFullYear() })
});

export default withText(mapText)(Footer);
