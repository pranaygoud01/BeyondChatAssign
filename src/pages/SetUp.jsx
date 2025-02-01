import React, { useContext } from "react";
import { CiViewList } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { motion } from "framer-motion";
import InputBtn from "../components/InputBtn";
import Btns from "../components/Btns";
import { companyData } from "../store/CompanyData";
import CompanyList from "../components/CompanyList";

const SetUp = () => {
  const { inputname, inputurl, inputdes, error } = useContext(companyData);

  return (
    <div className="min-h-screen flex max-lg:flex-col justify-center items-center  py-10 gap-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[35%] max-lg:w-full  p-6 max-lg:px-8 max-lg:pt-16 max-lg:pb-6 flex flex-col gap-6"
      >
        <h1 className="font-bold text-2xl flex gap-2 items-center">
          <GoOrganization /> Setup Organization
        </h1>
        <InputBtn type="text" placeholder="Enter Company Name" reff={inputname} />
        <InputBtn type="text" placeholder="Enter Company URL" reff={inputurl} />
        <textarea
          className="bg-neutral-50 border border-neutral-300 rounded-md px-3 py-5 text-sm w-full h-48 focus:outline-blue-400"
          ref={inputdes}
          placeholder="Enter Company Description"
        ></textarea>
        {error && <h1 className="text-red-500 text-sm font-semibold">{error}</h1>}
        <Btns name="Submit" path="/progress" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-[50%] max-lg:w-full bg-white shadow-md rounded-xl p-8 max-lg:px-8"
      >
        <h1 className="text-xl font-semibold py-2 border-b border-neutral-200 flex gap-2 items-center">
          <CiViewList className="text-3xl" /> List of Companies
        </h1>
        <CompanyList />
      </motion.div>
    </div>
  );
};

export default SetUp;
