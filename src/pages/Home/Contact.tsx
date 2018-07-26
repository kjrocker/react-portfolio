import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Col, ColProps } from 'reactstrap';
import {
  ContactButton,
  Icon,
  SmallHeader,
  Typography
  } from '../../components';
import { withText, WithTextProps } from '../../i18next';

export interface ContactProps extends WithTextProps, ColProps {
  header: string;
}

const ICON_SIZE = '1x';

export const EMAIL_KEY = 'kevin.j.rocker@gmail.com';

const Contact: React.SFC<ContactProps> = ({ ref, header, content, i18n, t, ready, ...props }) => (
  <Col {...props}>
    <SmallHeader>{header}</SmallHeader>
    <Typography>{content}</Typography>
    <ContactButton backgroundColor="#4f4f4f" hoverBackgroundColor="#363636" href={`mailto:${EMAIL_KEY}`}>
      <Icon size={ICON_SIZE} icon={faEnvelope} /> Email
    </ContactButton>
    <ContactButton
      backgroundColor="#0077B5"
      hoverBackgroundColor="#005e9c"
      href="https://www.linkedin.com/in/kevin-rocker/"
      target="_blank"
    >
      <Icon size={ICON_SIZE} icon={faLinkedinIn} /> LinkedIn
    </ContactButton>
    <ContactButton
      backgroundColor="#4f4f4f"
      hoverBackgroundColor="#363636"
      href="https://github.com/kjrocker/"
      target="_blank"
    >
      <Icon size={ICON_SIZE} icon={faGithub} /> Github
    </ContactButton>
  </Col>
);

const mapText = (t: TranslationFunction) => ({
  header: t('home:contactTitle'),
  content: t('home:contactContent', { postProcess: 'markdown-jsx' })
});

export default withText(mapText)(Contact) as React.SFC<ColProps>;
