import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Container, NavbarProps } from 'reactstrap';
import { withText, WithTextProps } from '../../i18next';
import { invertTheme, ThemeProvider } from '../../theme';
import NavbarLinks from './NavbarLinks';
import { Navbar, NavbarBrand } from './styles';

export interface NavigationBarProps extends NavbarProps, WithTextProps {
  title: string;
  secondary: string;
}

const NavigationBar: React.SFC<NavigationBarProps> = ({ children, t, i18n, ready, title, secondary, ...rest }) => {
  const renderTitle = ({ match }: any) => (match ? secondary : title);
  return (
    <ThemeProvider theme={invertTheme}>
      <Navbar {...rest}>
        <Container>
          <NavbarBrand>
            <Route path="/" exact={true} children={renderTitle} />
          </NavbarBrand>
          <NavbarLinks />
        </Container>
      </Navbar>
    </ThemeProvider>
  );
};

const mapText = (t: TranslationFunction) => ({
  title: t('common:siteTitle'),
  secondary: t('common:siteSubtitle')
});

export default withText(mapText)(NavigationBar) as React.SFC<NavbarProps>;
