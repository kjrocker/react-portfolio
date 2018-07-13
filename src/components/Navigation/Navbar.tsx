import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Navbar, NavbarBrand, NavbarProps } from 'reactstrap';
import { withText, WithTextProps } from '../../i18next';
import NavbarLinks from './NavbarLinks';

export interface NavigationBarProps extends NavbarProps, WithTextProps {
  title: string;
}

const NavigationBar: React.SFC<NavigationBarProps> = ({ children, t, i18n, ready, title, ...rest }) => {
  return (
    <Navbar {...rest}>
      <NavbarBrand>{title}</NavbarBrand>
      <NavbarLinks />
    </Navbar>
  );
};

const mapText = (t: TranslationFunction) => ({
  title: t('common:siteTitle')
});

export default withText(mapText)(NavigationBar) as React.SFC<NavbarProps>;
