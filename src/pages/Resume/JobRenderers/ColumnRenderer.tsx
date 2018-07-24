import * as React from 'react';
import { Paragraph, DividedRow } from '../../../components';
import withJobText, { InternalJobRenderer } from './util';
import { SmallResumeHeader } from '../styles';

const BigParagraph = Paragraph.extend`
  font-size: 18px;
`;

const JobLeftColumn: InternalJobRenderer = ({ job }) => (
  <>
    <SmallResumeHeader>{job.companyTitle}</SmallResumeHeader>
    <Paragraph>{job.jobTitle}</Paragraph>
    <Paragraph>
      {job.startDate} through {job.endDate}
    </Paragraph>
  </>
);

const JobRightColumn: InternalJobRenderer = ({ job }) => (
  <>
    <BigParagraph>{job.description}</BigParagraph>
    {job.details.map((s, i) => <Paragraph key={i}>{s}</Paragraph>)}
  </>
);

const JobRenderer: InternalJobRenderer = (props) => {
  return <DividedRow leftColumn={JobLeftColumn} rightColumn={JobRightColumn} columnProps={props} />;
};

export default withJobText(JobRenderer);
