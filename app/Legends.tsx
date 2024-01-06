"Use Client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { GiSoulVessel } from "react-icons/gi";
import { IoFilterOutline } from "react-icons/io5";
import { CiCircleChevRight } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";

const Legends = ({ onHoverLegend, handleLegendHover }) => {
  if (onHoverLegend)
    return (
      <div className="" onMouseOver={handleLegendHover}>
        {" "}
        <Box className=" bg-gray-50 w-44 h-fit flex flex-col gap-y-2  absolute top-72 left-3">
          <Typography className="p-1  ">
            <Typography component="h6" className="text-slate-700 ml-2 mb-2">
              Status{" "}
            </Typography>
            {[
              {
                item: "Health",
                icon: <MdCheckBoxOutlineBlank />,
              },

              {
                item: "At Risk ",
                icon: (
                  <MdCheckBoxOutlineBlank className="bg-red-500 text-red-500 " />
                ),
              },
              {
                item: "Critical",
                icon: (
                  <MdCheckBoxOutlineBlank className="bg-yellow-500 text-yellow-500 " />
                ),
              },
              {
                item: "Design Limit Breach ",
                icon: <CiWarning />,
              },
            ].map((item) => (
              <Box className="  ">
                <div className="flex items-center gap-x-1 ml-2 text-slate-600 mb-1 ">
                  {" "}
                  <span>{item.icon}</span> <span>{item.item}</span>{" "}
                </div>
              </Box>
            ))}
          </Typography>
          <Typography className="  p-1  ">
            <Typography component="h6" className="text-slate-700 ml-2 mb-2">
              Status{" "}
            </Typography>
            {[
              {
                item: "Wet Gas Compressor",
                icon: <CiCircleChevRight />,
              },

              {
                item: "Heat Exchanger ",
                icon: <CiLocationArrow1 className="bg-red-500 text-red-500 " />,
              },
              {
                item: "Pump",
                icon: (
                  <IoFilterOutline className="bg-yellow-500 text-yellow-500 " />
                ),
              },
              {
                item: "Air Compressor",
                icon: <CiWarning />,
              },
              {
                item: "Vessel",
                icon: <GiSoulVessel />,
              },
              {
                item: "Pipe",
                icon: <CiWarning />,
              },
              {
                item: "Tag Values",
                icon: <CiWarning />,
              },
            ].map((item) => (
              <Box className="  ">
                <div className="flex items-center gap-x-1 ml-2 mb-1  text-slate-600 ">
                  {" "}
                  <span>{item.icon}</span>{" "}
                  <span style={{ fontSize: "8px" }}>{item.item}</span>{" "}
                </div>
              </Box>
            ))}
          </Typography>
        </Box>
      </div>
    );
};

export default Legends;
