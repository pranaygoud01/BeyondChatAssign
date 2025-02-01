import React, { useContext } from "react";
import { companyData } from "../store/CompanyData";
import { Link } from "react-router-dom";

const CompanyList = () => {
  const { companies } = useContext(companyData);

  return (
    <ul className="pt-5 max-lg:pt-5 grid grid-cols-1 gap-5">
      {companies.map((company) => (
        <Link
          key={company.name}
          to={`/company/${company.name}`}
          className="flex justify-between hover:bg-neutral-50 px-4 py-4 rounded-xl"
        >
          <div className="flex gap-5 items-center">
            <img
              src={company.imgUrl}
              alt={`${company.name} logo`}
              className="w-[30px] h-[30px] object-contain"
            />
            <h1 className="font-bold text-md">{company.name}</h1>
          </div>
          <div className="flex gap-3">
            <div
              className={`flex items-center gap-2 text-xs font-semibold py-2 px-4 border-2 rounded-md shadow-md ${
                company.status === "Scraped"
                  ? "bg-green-200 border-green-400 text-green-800"
                  : "bg-red-200 border-red-400 text-red-800"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  company.status === "Scraped" ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              {company.status}
            </div>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default CompanyList;