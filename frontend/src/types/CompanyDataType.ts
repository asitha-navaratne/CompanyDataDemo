type ImageType = {
  "32x32": string;
  "74x74": string;
  "100x100": string;
};

type CompanyDataType = {
  uuid: string;
  id: string;
  images: ImageType;
  income_streams: { id: string; name: string }[];
  industries: { id: string; name: string }[];
  name: string;
  tagline: string;
  total_jobs_available: number;
};

export default CompanyDataType;
