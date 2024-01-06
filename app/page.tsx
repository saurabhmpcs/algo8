"use client";

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import List from "@mui/material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Container from "@mui/material/Container";
import { useState } from "react";
import ShiftAll from "./ShiftAll";
import DataGranularity from "./DataGranularity";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { GiCube } from "react-icons/gi";
import LogoColor from "@/app/Assets/Logo-Color.png";
import { CiSettings } from "react-icons/ci";
import { ImStatsBars2 } from "react-icons/im";
import { SlSizeFullscreen } from "react-icons/sl";
import { GoZoomOut } from "react-icons/go";
import { GoZoomIn } from "react-icons/go";
import Legends from "./Legends";
import Details from "./Details";
import InfoCard from "./InfoCard";
import Graph from "./Graph";
import TabList from "./TabList";
import Settings from "./Settings";
import { BiExitFullscreen } from "react-icons/bi";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const [onHoverLegend, setOnHoverLegend] = useState(false);
  const [onHoverDetails, setOnHoverDetails] = useState(false);
  const [onHoverSettings, setOnHoverSettings] = useState(false);
  const [expansion, setExpansion] = useState(false);

  const handleExpansion = () => {
    setExpansion(!expansion);
  };

  const handleLegendHover = () => {
    setOnHoverLegend(true);
  };
  const handleLegendHoverClose = () => {
    setOnHoverLegend(false);
  };
  const handleDetailsHover = () => {
    setOnHoverDetails(true);
  };
  const handleDetailsHoverClose = () => {
    setOnHoverDetails(false);
  };
  const handleSettingsHover = () => {
    setOnHoverSettings(true);
  };
  const handleSettingsHoverClose = () => {
    setOnHoverSettings(false);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <>
      <Box className="bg-gray-200 w-screen h-full scrollbar-hide overflow-y-scroll">
        <Drawer variant="permanent" open={open} className="z-50">
          <DrawerHeader className="flex justify-start">
            <IconButton onClick={handleDrawerOpen}>
              {open ? <ArrowBackIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              "INDMAX Performance",
              "Reactor/Regenerator",
              "Main Fractionator",
              "Waste Heat Bolier",
              "Main Air Blower",
              "Wet Gas Compressor",
              "Power Recovery Turbine",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["What-If Analysis", "Data Analysis", "Tool Settings"].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Box className="mt-auto ml-1 flex bg-gray-200 h-10">
            <img
              src="https://algo8.ai/wp-content/uploads/2023/03/Logo-Color.png"
              alt=""
              className="bg-white w-24 px-2.5 ml-3"
            />
            | <span className="text-orange-400 pt-1 text-xl">Digital Twin</span>
          </Box>
        </Drawer>
        <Box className="">
          <Box className="bg-white pl-20 pr-6 py-5 text-black flex justify-between">
            <Box className="flex gap-x-1">
              <Typography variant="body2" className="text-blue-500 font-light">
                Digital Twin
              </Typography>
              <Typography variant="body2" className="text-gray-800 font-light">
                {" "}
                | INDMAX
              </Typography>
            </Box>
            <Box className="flex gap-x-4 items-center">
              <Typography variant="caption" className="text-gray-500">
                Last update on 18/05/2023
              </Typography>
              <GiCube className="text-blue-700 text-xl hover:text-orange-300" />
              <NotificationsIcon className="text-gray-400 hover:text-orange-300" />

              <Box className="relative ">
                <AccountCircleIcon className="hover:text-orange-300" />
                {profileDropdownOpen ? (
                  <KeyboardArrowUpIcon onClick={handleProfileDropdown} />
                ) : (
                  <KeyboardArrowDownIcon onClick={handleProfileDropdown} />
                )}
                <Box
                  className={`absolute z-20 bg-white w-fit p-4 rounded-sm top-12 right-0 flex flex-col justify-start gap-y-4 ${
                    profileDropdownOpen ? "display" : "hidden"
                  }`}
                >
                  <Typography variant="caption">Profile</Typography>
                  <Typography variant="caption">Setting</Typography>
                  <Typography variant="caption">Anything</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={` h-full scrollbar-hide overflow-y-scroll  `}>
          {/* Wet Compressor box horizontal  */}
          <Box className="flex flex-row justify-between ml-2 ">
            <Box className="flex gap-x-1 flex-row">
              {" "}
              <Typography className="text-2xl text-slate-500 pl-24 pt-4">
                WET GAS COMPRESSOR
              </Typography>
              <Typography className="text-sm text-slate-400 pt-2 mt-6  ">
                As on 18/05/2023 12:53:52
              </Typography>
            </Box>
            {/* dropdown box */}
            <Box className=" mr-[10rem] flex gap-x-12">
              <ShiftAll />
              <DataGranularity />
            </Box>
          </Box>
          {/* Underdevelop box */}

          <Box
            className={` flex flex-row gap-x-4  h-full scrollbar-hide overflow-y-scroll z-50  ${
              expansion ? "w-700px" : "w-fit"
            }`}
          >
            <Box className="bg-gray-200 mt-6 h-[700px] shadow-md w-[600px] ml-24 z-50 relative ">
              <Box>
                <div className="flex justify-end space-x-4 p-2">
                  {" "}
                  <div className="bg-white rounded-md p-1 text-black  ">
                    Related Documents <KeyboardArrowDownIcon className="ml-4" />
                  </div>
                  <button
                    className="bg-white text-blue-500 px-2 border border-solid border-blue-500 rounded-md  "
                    onMouseOver={handleDetailsHover}
                    onMouseOut={handleDetailsHoverClose}
                  >
                    Details
                  </button>
                  <Details
                    onHoverDetails={onHoverDetails}
                    handleDetailsHover={handleDetailsHover}
                    handleDetailsHoverClose={handleDetailsHoverClose}
                  />
                  <button
                    className="bg-gray-400 px-2 text-2xl text-white rounded-md "
                    onMouseOver={handleSettingsHover}
                    onMouseOut={handleSettingsHoverClose}
                  >
                    <CiSettings />
                  </button>
                  <Settings
                    onHoverSettings={onHoverSettings}
                    handleSettingsHover={handleSettingsHover}
                    handleSettingsHoverClose={handleSettingsHoverClose}
                  />
                </div>
                <div className="mt-[600px]  flex pb-6 justify-between">
                  <div
                    className="bg-slate-400 ml-4 text-gray-200 rounded-md flex gap-x-3 p-2 "
                    onMouseOver={handleLegendHover}
                    onMouseOut={handleLegendHoverClose}
                  >
                    <Legends
                      onHoverLegend={onHoverLegend}
                      handleLegendHover={handleLegendHover}
                    />
                    <ImStatsBars2 /> Legends
                  </div>
                  <div className="flex  mr-3 gap-x-6">
                    <div className="flex rounded-md border border-solid border-blue-600">
                      <span className="bg-blue-600 text-white text-3xl px-2 font-bold">
                        <GoZoomIn className="p-1" />
                      </span>
                      <span className="bg-white text-black p-1 px-2">100%</span>
                      <span className="bg-blue-600 px-2 text-white text-3xl font-bold">
                        <GoZoomOut className="p-1 font-extrabold" />
                      </span>
                    </div>
                    <div
                      className=" bg-blue-600 p-2 text-white font-extrabold text-2xl rounded-sm  "
                      onClick={handleExpansion}
                    >
                      {expansion ? <BiExitFullscreen /> : <SlSizeFullscreen />}
                    </div>
                  </div>
                </div>
              </Box>
            </Box>

            <Box className=" w-2/3 scrollbar-hide h-full overflow-y-scroll">
              <InfoCard />
              <Box className="flex flex-row gap-x-4">
                {" "}
                <Graph /> <TabList />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
