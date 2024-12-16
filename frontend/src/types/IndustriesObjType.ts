import CompanyDataType from "./CompanyDataType";

/** Data type of companies sorted by industry */
type IndustriesObjType = {
  [key: string]: CompanyDataType[];
};

export default IndustriesObjType;
