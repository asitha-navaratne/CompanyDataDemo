import { useEffect, useState } from "react";

import Card from "./components/Card";

import IndustriesObjType from "./types/IndustriesObjType";

import GetCompanies from "./services/GetCompanies";
import processPayload from "./helpers/processPayload";

function App() {
  const [companiesByIndustry, setCompaniesByIndustry] =
    useState<IndustriesObjType>({});

  useEffect(() => {
    GetCompanies().then((res) => {
      setCompaniesByIndustry(processPayload(res));
    });
  }, []);

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
