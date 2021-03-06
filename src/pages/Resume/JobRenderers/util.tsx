import { TranslationFunction } from 'i18next';
import { withText } from '../../../i18next';
import { Job } from '../../../types';

export type JobRenderer = React.SFC<{ id: string }>;

export type InternalJobRenderer = React.ComponentType<{ id: string; job: Job }>;

const mapText = (t: TranslationFunction, ownProps: { id: string }): { job: Job } => ({
  job: {
    key: ownProps.id,
    jobTitle: t(`resume:jobs:${ownProps.id}:jobTitle`),
    startDate: t(`resume:jobs:${ownProps.id}:startDate`),
    endDate: t(`resume:jobs:${ownProps.id}:endDate`),
    companyTitle: t(`resume:jobs:${ownProps.id}:companyTitle`),
    companyDescription: t(`resume:jobs:${ownProps.id}:companyDescription`),
    description: t(`resume:jobs:${ownProps.id}:jobDescription`),
    details: t(`resume:jobs:${ownProps.id}:jobDetails`, { returnObjects: true })
  }
});

export default withText(mapText);
