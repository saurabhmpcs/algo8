import { Box } from "@mui/material";
import { list } from "postcss";
import React from "react";

const Details = ({
  onHoverDetails,
  handleDetailsHover,
  handleDetailsHoverClose,
}) => {
  const info = [
    {
      title: "Name/Title",
      type: "Wet Gas Composer",
    },
    {
      title: "Type",
      type: "Static",
    },
    {
      title: "Parent",
      type: "INDIMAX",
    },
    {
      title: "Location",
      type: "Pradeep",
    },
    {
      title: "ALias",
      type: "023 k040",
    },
  ];
  const List = [
    {
      title: "Flue gas Flow",
      type: "2121F897",
    },
    {
      title: "Flue gas Pressure",
      type: "81232T1",
    },
    {
      title: "Flue gas Temperature",
      type: "023T1C56",
    },
    {
      title: "Water FLow",
      type: "023T1C563",
    },
    {
      title: "Water Pressure",
      type: "023T1C56002A",
    },
    {
      title: "Water Temperature",
      type: "023T1C560033",
    },
    {
      title: "Steam Flow",
      type: "023T1C561001",
    },
    {
      title: "Steam Pressure",
      type: "023T1C56002A",
    },
    {
      title: "Steam Temperature",
      type: "023T1C568181",
    },

    {
      title: "Steam Temperature",
      type: "023T1C568181",
    },

    {
      title: "Composition C)",
      type: "023T1C56782",
    },
    {
      title: "Composition SPM",
      type: "023T1C568181",
    },
    {
      title: "Composition HC",
      type: "023T1C568181",
    },
    {
      title: "Composition NOX",
      type: "023T1C568181",
    },
    {
      title: "Composition SOX",
      type: "023T1C568181",
    },
  ];

  if (onHoverDetails)
    return (
      <Box
        className="bg-slate-50 w-fit overflow-y-scroll h-[330px] scrollbar-hide flex flex-col absolute top-12 right-14 shadow-lg rounded-md"
        onMouseOver={handleDetailsHover}
        onMouseOut={handleDetailsHoverClose}
      >
        <div className="flex flex-row gap-x-28 m-1 p-2 sticky top-0 z-10">
          <span className="text-black ">Details</span>{" "}
          <span className="text-green-400">Active</span>
        </div>

        <div className="border-b border-gray-300 sticky top-0 z-10">
          {" "}
          {info.map((item) => (
            <Box>
              <div className="flex items-center gap-x-1 m-1 px-2 text-sm sticky top0 text-slate-600  ">
                {" "}
                <p className="w-24">{item.title}</p> :{" "}
                <p className="w-38 ">{item.type}</p>{" "}
              </div>
            </Box>
          ))}
        </div>

        <div>
          {" "}
          {List.map((item) => (
            <Box>
              <div className="flex items-center gap-x-1 m-1 px-2 text-sm  text-slate-600 -z-10 ">
                {" "}
                <p className="w-24">{item.title}</p> :{" "}
                <p className="w-38 ">{item.type}</p>{" "}
              </div>
            </Box>
          ))}
        </div>
      </Box>
    );
};

export default Details;
