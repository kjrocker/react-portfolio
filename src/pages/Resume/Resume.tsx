import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Container, ContainerProps } from 'reactstrap';
import { Header } from '../../components';
import { withText } from '../../i18next';
import BodyContent from './BodyContent';
import JobList from './JobList';
import ListContent from './ListContent';

export interface ResumeProps extends ContainerProps {
  title: string;
}

const Resume: React.SFC<ResumeProps> = ({ title, ...rest }) => (
  <Container {...rest}>
    <Header>{title}</Header>
    <BodyContent id="profile" />
    <JobList />
    <ListContent id="skills" />
    <ListContent id="education" />
  </Container>
);

const mapText = (t: TranslationFunction) => ({ title: t('resume:resumeTitle') });

export default withText(mapText)(Resume);
