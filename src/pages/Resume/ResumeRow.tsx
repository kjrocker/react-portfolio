import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { RowProps } from 'reactstrap';
import { DividedRow, Typography } from '../../components';
import { withText, WithTextProps } from '../../i18next';
import { SmallResumeHeader } from './styles';

export interface SkillProps extends RowProps, WithTextProps {
  id: 'skills' | 'education' | 'profile';
  body: string[];
  title: string;
}

const Skills: React.SFC<SkillProps> = ({ ref, body, title, t, i18n, ready, ...rest }) => {
  return (
    <DividedRow
      leftColumn={(props) => <SmallResumeHeader>{title}</SmallResumeHeader>}
      rightColumn={(props) => <Typography>{body}</Typography>}
    />
  );
};

const mapText = (t: TranslationFunction, ownProps: { id: 'skills' | 'education' }) => {
  return {
    body: t(`resume:${ownProps.id}:content`, { joinArrays: ', ', postProcess: 'markdown-jsx' }),
    title: t(`resume:${ownProps.id}:title`)
  };
};

export default withText(mapText)(Skills);
