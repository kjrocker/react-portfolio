import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { Paragraph } from '../../../components';
import withJobText, { InternalJobRenderer } from './util';
import { SmallResumeHeader } from '../styles';

const BigParagraph = Paragraph.extend`
  font-size: 18px;
`;

const JobRenderer: InternalJobRenderer = ({ job }) => {
  return (
    <>
      <hr />
      <Row>
        <Col xs={2}>
          <SmallResumeHeader>{job.company.title}</SmallResumeHeader>
          <Paragraph>{job.info.jobTitle}</Paragraph>
          <Paragraph>
            {job.info.startDate} through {job.info.endDate}
          </Paragraph>
        </Col>
        <Col xs={10}>
          <BigParagraph>{job.info.description}</BigParagraph>
          {job.info.details.map((s, i) => <Paragraph key={i}>{s}</Paragraph>)}
        </Col>
      </Row>
    </>
  );
};

export default withJobText(JobRenderer);
