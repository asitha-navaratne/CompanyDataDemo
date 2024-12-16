import { FC, memo } from "react";

import { CardProps } from "./Card.types";

const Card: FC<CardProps> = (props) => {
  return (
    <div className="w-64 sm:w-1/2 lg:w-1/4 p-6 bg-white rounded-lg shadow-sm m-6">
      {/* Card Header */}
      <header className="flex justify-between">
        <h1 className="text-md font-bold">
          {props.industry[0].toUpperCase() + props.industry.slice(1)}
        </h1>
        <p className="font-semibold text-gray-500">{props.companies.length}</p>
      </header>
      {/* Card Body */}
      <section className="mt-5">
        <div className="flex justify-between">
          <p className="text-xs text-gray-400">Name</p>
          <p className="text-xs text-gray-500">Total jobs available</p>
        </div>
        <div className="border-t border-gray-200 my-2"></div>
        <div className="flex flex-col mt-3">
          {/* List of Companies */}
          {props.companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-between mt-1"
            >
              <div className="flex items-center">
                <img
                  src={company.images["100x100"]}
                  srcSet={`${company.images["32x32"]} 480w, ${company.images["74x74"]} 768w, ${company.images["100x100"]} 1280w`}
                  className="w-8 h-8 mr-2"
                  alt="Company Icon"
                />
                <p className="text-sm">{company.name}</p>
              </div>
              <p className="text-sm text-gray-500">
                {company.total_jobs_available}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Card);
