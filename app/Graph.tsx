import { Box } from "@mui/material";
import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LineChart } from "@mui/x-charts/LineChart";

const Graph = () => {
  return (
    <Box className="w-fit mx-2 flex-col gap-y-2 mb-2 ">
      <Box className="flex flex-col bg-slate-50 text-black gap-y-2 p-2 px-6 my-2">
        <div className="">Efficiency Anormaly Score</div>
        <div className="flex flex-row gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <MdOutlineCheckBoxOutlineBlank className="bg-red-500 text-red-500 rounded-md" />
            Anormaly Score
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineCheckBoxOutlineBlank className="bg-red-300 text-red-300  rounded-md" />
            Anormaly Threshold
          </div>
          <div className="flex items-center gap-x-1">
            {" "}
            <MdOutlineCheckBoxOutlineBlank className=" bg-red-200 text-red-200  rounded-md" />
            Risk Zone
          </div>
        </div>
        <div>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [1.75, 1, 2, 8.5, 1.5, 5],
              },
            ]}
            width={550}
            height={200}
          />
        </div>
      </Box>
      <Box className="flex flex-col bg-gray-100 text-black gap-y-2 p-2 px-6 ">
        <div className="">Efficiency Anormaly Score</div>
        <div className="flex flex-row gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <MdOutlineCheckBoxOutlineBlank className="bg-red-500 text-red-500 rounded-md" />
            Anormaly Score
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineCheckBoxOutlineBlank className="bg-red-300 text-red-300  rounded-md" />
            Anormaly Threshold
          </div>
          <div className="flex items-center gap-x-1">
            {" "}
            <MdOutlineCheckBoxOutlineBlank className=" bg-red-200 text-red-200  rounded-md" />
            Risk Zone
          </div>
        </div>
        <div>
          <LineChart
            className=""
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [1.5, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={200}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Graph;
