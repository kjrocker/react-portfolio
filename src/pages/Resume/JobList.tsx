import * as React from 'react';
import { ColumnRenderer as DefaultRenderer, JobRenderer } from './JobRenderers';

export const JOB_KEYS = ['xceleration', 'levvel', 'pcls', 'unc'];

export interface JobListProps {
  jobRenderer?: JobRenderer;
}

// The way jobs are displayed will see a lot of changes. And they're iterable. So investing in a renderer pattern,
// and swapping renderers as needed, is a good investment here.
const JobList: React.SFC<JobListProps> = ({ jobRenderer: Component = DefaultRenderer }) => {
  return <>{JOB_KEYS.map((k) => <Component key={k} id={k} />)}</>;
};

export default JobList;
