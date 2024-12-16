import { useEffect, useState } from "react";

import Card from "./components/Card";

import IndustriesObjType from "./types/IndustriesObjType";
import CompanyDataType from "./types/CompanyDataType";

import GetCompanies from "./services/GetCompanies";

function App() {
  const [companiesByIndustry, setCompaniesByIndustry] =
    useState<IndustriesObjType>({});

  useEffect(() => {
    GetCompanies().then((res) => {
      setCompaniesByIndustry(processPayload(res));
    });
  }, []);

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

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-blue-50">
      {Object.keys(companiesByIndustry).map((industry) => (
        <Card
          key={industry}
          industry={industry}
          companies={companiesByIndustry[industry]}
        />
      ))}
    </div>
  );
}

export default App;
