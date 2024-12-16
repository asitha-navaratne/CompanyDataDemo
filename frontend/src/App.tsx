import { useEffect, useState } from "react";

import axios from "axios";

import Card from "./components/Card";

import CompanyDataType from "./types/CompanyDataType";

function App() {
  const [companies, setCompanies] = useState<{
    [key: string]: CompanyDataType[];
  }>({});

  useEffect(() => {
    axios.get("http://localhost:3000/items").then((res) => {
      const industries = res.data.reduce(
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
      console.log(industries);
      setCompanies(industries);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-blue-50">
      {Object.keys(companies).map((industry) => (
        <Card
          key={industry}
          industry={industry}
          companies={companies[industry]}
        />
      ))}
    </div>
  );
}

export default App;
