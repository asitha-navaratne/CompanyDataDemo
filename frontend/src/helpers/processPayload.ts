import CompanyDataType from "../types/CompanyDataType";

/**
 * Sort companies by industry
 * @param payload CompanyDataType[] Payload object from API to be processed
 * @returns Companies sorted out by industry in the format {industryName: CompanyDataType[]}
 */
const processPayload = function (payload: CompanyDataType[]) {
  return payload.reduce(
    (
      industriesAcc: { [key: string]: CompanyDataType[] },
      company: CompanyDataType
    ) => {
      company.industries.forEach((industry) => {
        if (industriesAcc[industry.name]?.length > 0) {
          industriesAcc[industry.name] = [
            ...industriesAcc[industry.name],
            company,
          ];
        } else {
          industriesAcc[industry.name] = [company];
        }
      });
      return industriesAcc;
    },
    {}
  );
};

export default processPayload;
