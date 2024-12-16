import AxiosInstance from "../utils/Axios";
import config from "../configs/urls.config";

import CompanyDataType from "../types/CompanyDataType";

const GetCompanies = async function (): Promise<CompanyDataType[]> {
  return AxiosInstance.get(config.api.items)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export default GetCompanies;
