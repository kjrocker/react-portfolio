import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Container, Nav, NavLink } from 'reactstrap';
import { withText } from '../../i18next';
import { invertTheme, ThemeProvider } from '../../theme';
import { Navbar, NavbarBrand } from '../Navigation/styles';
import StickyFooter from './StickyFooter';
import { EMAIL_KEY } from '../../pages/Home/Contact';

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
            <NavLink href={`mailto:${EMAIL_KEY}`} target="__blank">
              Email
            </NavLink>
            <NavLink href="https://github.com/kjrocker/react-portfolio" target="__blank">
              Source
            </NavLink>
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
