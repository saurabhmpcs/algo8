"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import graph from "@/public/assets/downgraph.svg";
import Image from "next/image";

const InfoCard = () => {
  const infoCard = [
    { title: "Health", value: "98.34", unit: "%" },
    { title: "Efficiency", value: "98.34", unit: "%" },
    { title: "Steam Consumption", value: "98.34", unit: "T/hr" },
    { title: "Wet Gas Flow", value: "98.34", unit: "T/hr" },
    { title: "Time To Failure ", value: "44", unit: "Weeks" },
    { title: "Power Consumption", value: "45", unit: "MW" },
    { title: "InterStage Cooker Temp.", value: "98.34", unit: "C" },
    { title: "Health", value: "98.34", unit: "Kg/cm" },
  ];

  return (
    <div>
      <Box className="h-fit mx-2 w-fit my-6 ">
        <Grid className=" grid grid-cols-4 gap-x-12 ">
          {infoCard.map((item) => (
            <Grid className="max-h-32 max-w-60">
              <Card className="bg-white max-h-20 max-w-[250px] relative">
                <CardContent className=" ">
                  <div className="flex flex-col gap-y-3 max-w-72">
                    <p className="font-light text-xs "> {item.title}</p>
                    <div className=" ">
                      <span className="text-xl font-semibold">
                        {item.value}
                      </span>
                      <span className=" ml-1 text-sm">{item.unit}</span>
                    </div>
                  </div>

                  <div className=" top-16 bottom-1 right-1 ml-7 bg-gray-100 absolute">
                    <Image src={graph} alt="" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default InfoCard;
