export interface Job {
  info: {
    key: string;
    startDate: string;
    endDate: string;
    jobTitle: string;
    description: string;
    details: string[];
  };
  company: { title: string; description: string };
}
