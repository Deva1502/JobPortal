import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Jobs/Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/Redux/jobslice";
import useGetAllJobs from "@/hooks/useGetAllJobs";


const Browse = () => {
  useGetAllJobs();
  const {allJobs} = useSelector(store=>store.job);
  const dispatch = useDispatch();
  useEffect((()=>{
    return()=>{dispatch(setSearchedQuery(""));}
  }))
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 mt-5">
        <h1 className="font-bold text-xl my-10">
          Search Result {allJobs.length}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <Job job ={job} key={job._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
