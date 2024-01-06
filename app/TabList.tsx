import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import React from "react";
import graph from "@/public/assets/downgraph.svg";

const TabList = () => {
  const tripTags = [
    {
      tag: "Tribune Shaft Axial Displ.",
      value: "98.34",
      unit: "μm",
    },
    {
      tag: "Compressor Shaft Axial Displ.",
      value: "45",
      unit: "μm",
    },
    {
      tag: "Tribune Shaft  Vibration - NDE.",
      value: "98.34",
      unit: "μm",
    },
    {
      tag: "Tribune Shaft Vibration - DE",
      value: "45",
      unit: "μm",
    },
    {
      tag: "Compressor Shaft Vibration - DE",
      value: "45",
      unit: "μm",
    },
    {
      tag: "Compressor SHaft Vibration - NDE",
      value: "98.34",
      unit: "μm",
    },
    {
      tag: "Tribune Thrust Bearing Temp :AS",
      value: "98.34",
      unit: "°C",
    },
    {
      tag: "Tribune Thrust Bearing Temp: NAS",
      value: "45",
      unit: "°C",
    },
    {
      tag: "Tribune Journal Bearing Temp:NDE ",
      value: "98.34",
      unit: "°C",
    },
    {
      tag: "Tribune Journal Bearing Temp:NDE ",
      value: "45",
      unit: "°C",
    },
    {
      tag: "Compressor Thrust Bearing Temp:NAS ",
      value: "98.34",
      unit: "°C",
    },
    {
      tag: "Compressor Thrust Bearing Temp:NDE ",
      value: "98.34",
      unit: "°C",
    },
    {
      tag: "Compressor Thrust Bearing Temp:DE ",
      value: "45",
      unit: "°C",
    },
  ];

  return (
    <Box className="bg-slate-100 rounded-lg w-fit h-[500px] overflow-y-scroll scrollbar-hide  ">
      <div className="p-1 bg-white px-4 py-4 text-gray-400  sticky top-0 mb-1 h-16 z-10">
        Trip Tags
      </div>
      <div className=" overflow-y-scroll h-full scrollbar-hide ">
        {tripTags.map((item) => (
          <Box className="flex flex-col  w-[280px]   ">
            <Card className="bg-white max-h-24 max-w-96 relative rounded-none mb-1 shadow-md">
              <CardContent className=" ">
                <div className="flex flex-col gap-y-3 max-w-72">
                  <p className="font-light text-xs "> {item.tag}</p>
                  <div className=" ">
                    <span className="text-xl font-semibold">{item.value}</span>
                    <span className=" ml-1 text-sm">{item.unit}</span>
                  </div>
                </div>

                <div className=" top-16 bottom-1 right-1 ml-7 bg-gray-100 absolute">
                  <Image src={graph} alt="" />
                </div>
              </CardContent>
            </Card>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default TabList;
