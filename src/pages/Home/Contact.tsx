import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Col, ColProps } from 'reactstrap';
import {
  ContactButton,
  Header,
  Icon,
  Paragraph
  } from '../../components';
import { withText, WithTextProps } from '../../i18next';

export interface ContactProps extends WithTextProps, ColProps {
  header: string;
}

const ICON_SIZE = '1x';

const EMAIL_KEY =
  '&#107;&#101;&#118;&#105;&#110;&#046;&#106;&#046;&#114;&#111;&#099;&#107;&#101;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;';

const Contact: React.SFC<ContactProps> = ({ ref, header, content, ...props }) => (
  <Col {...props}>
    <Header>{header}</Header>
    <Paragraph>{content}</Paragraph>
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
  header: t('common:home:contactTitle'),
  content: t('common:home:contactContent', { postProcess: 'markdown-jsx' })
});

export default withText(mapText)(Contact) as React.SFC<ColProps>;
