import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Button, Container, ContainerProps } from 'reactstrap';
import { Header } from '../../components';
import { withText, WithTextProps } from '../../i18next';
import BodyContent from './BodyContent';
import JobList from './JobList';
import ListContent from './ListContent';

export interface ResumeProps extends ContainerProps, WithTextProps {
  title: string;
}

const Resume: React.SFC<ResumeProps> = ({ title, t, i18n, ready, ...rest }) => (
  <Container {...rest}>
    <Header>{title}</Header>
    <BodyContent id="profile" />
    <JobList />
    <ListContent id="skills" />
    <ListContent id="education" />
    <Button block={true} href="/resume.pdf" target="__blank">
      Get the PDF!
    </Button>
  </Container>
);

const mapText = (t: TranslationFunction) => ({ title: t('resume:resumeTitle') });

export default withText(mapText)(Resume);
