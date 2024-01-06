import { Box } from "@mui/material";
import React from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";

const Settings = ({
  onHoverSettings,
  handleSettingsHover,
  handleSettingsHoverClose,
}) => {
  if (onHoverSettings)
    return (
      <Box
        className="absolute top-12 right-2 w-fit h-fit bg-white shadow-lg rounded-md "
        onMouseOut={handleSettingsHoverClose}
        onMouseOver={handleSettingsHover}
      >
        <div className="w-60 text-black px-4 py-3 mx-3 ">
          <div className="flex items-center gap-x-2">
            <RiCheckboxBlankLine className="text-blue-500" />{" "}
            <span>Show Tag Values</span>
          </div>
          <div className="flex items-center gap-x-2">
            <RiCheckboxBlankLine className="text-blue-500" />{" "}
            <span>Show Tag Value Trends</span>
          </div>
        </div>
      </Box>
    );
};

export default Settings;
