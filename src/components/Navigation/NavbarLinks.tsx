import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Nav, NavItem, NavProps } from 'reactstrap';
import { withText, WithTextProps } from '../../i18next';
import { NavLink } from './styles';

export interface NavbarLinksProps extends NavProps, WithTextProps {
  homeText: string;
  resumeText: string;
}

const NavbarLinks: React.SFC<NavbarLinksProps> = ({ ref, homeText, resumeText, i18n, t, ready, ...props }) => (
  <Nav {...props}>
    <NavItem>
      <NavLink exact={true} to="/">
        {homeText}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink exact={true} to="/resume">
        {resumeText}
      </NavLink>
    </NavItem>
  </Nav>
);

const mapText = (t: TranslationFunction) => ({
  homeText: t('common:nav:home'),
  resumeText: t('common:nav:resume')
});

export default withText(mapText)(NavbarLinks) as React.SFC<NavProps>;
