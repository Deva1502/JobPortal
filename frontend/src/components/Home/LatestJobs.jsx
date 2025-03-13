import React from "react";
import LatestJobCard from "./LatestJobCard";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job) || { allJobs: [] };

  if (!allJobs || !Array.isArray(allJobs)) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-blue-800">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>No Job available</span>
        ) : (
          allJobs.slice(0, 6).map((job, index) => {
            // console.log("Job ID:", job._id); // Debugging
            return <LatestJobCard  key={job._id || index} job={job} />;
          })
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
