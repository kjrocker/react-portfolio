import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Container, ContainerProps } from 'reactstrap';
import { Header } from '../../components';
import { withText, WithTextProps } from '../../i18next';
import JobList from './JobList';
import ResumeRow from './ResumeRow';

export interface ResumeProps extends ContainerProps, WithTextProps {
  title: string;
  downloadLink: string;
}

const Resume: React.SFC<ResumeProps> = ({ title, t, i18n, ready, downloadLink, ...rest }) => (
  <Container {...rest}>
    <Header>{title}</Header>
    <ResumeRow id="profile" />
    <ResumeRow id="skills" />
    <JobList />
    <ResumeRow id="education" />
    {/* <hr />
    <Button block={true} href="/resume.pdf" target="__blank">
      {downloadLink}
    </Button> */}
  </Container>
);

const mapText = (t: TranslationFunction) => ({
  title: t('resume:resumeTitle'),
  downloadLink: t('resume:downloadLink')
});

export default withText(mapText)(Resume);
