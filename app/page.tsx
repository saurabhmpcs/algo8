"use client"

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import List from "@mui/material/List"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import Container from "@mui/material/Container"
import { useState } from "react"

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

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
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
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
}))

export default function MiniDrawer() {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  const handleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen)
  }

  return (
    <Box className='bg-gray-100 w-screen h-screen'>
      <Drawer variant='permanent' open={open} className='z-50'>
        <DrawerHeader className='flex justify-start'>
          <IconButton onClick={handleDrawerOpen}>
            {open ? <ArrowBackIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
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
          {["All mail", "Trash", "Spam"].map((text, index) => (
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
      </Drawer>
      <Box className=''>
        <Box className='bg-white pl-20 pr-6 py-5 text-black flex justify-between'>
          <Box className='flex gap-x-1'>
            <Typography variant='body2' className='text-blue-500 font-light'>
              Digital Twin
            </Typography>
            <Typography variant='body2' className='text-gray-800 font-light'>
              {" "}
              | INDMAX
            </Typography>
          </Box>
          <Box className='flex gap-x-4 items-center'>
            <Typography variant='caption' className='text-gray-500'>
              Last update on 18/05/2023
            </Typography>
            <Box className='relative'>
              <AccountCircleIcon className='hover:text-yellow-400' />
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
                <Typography variant='caption'>Profile</Typography>
                <Typography variant='caption'>Setting</Typography>
                <Typography variant='caption'>Anything</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
