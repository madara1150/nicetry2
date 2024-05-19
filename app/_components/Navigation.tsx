import { Autocomplete, Box, Stack, Avatar, Button } from "@mui/joy";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ButtonMenu } from "./ButtonMenu";

export const Navigation = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ background: "#242526", padding: 1, borderBottom: "1px solid #393a3b"}}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Box>
            <FacebookIcon sx={{ color: "blue", fontSize: "50px" }} />
          </Box>
          <Autocomplete
            placeholder="ค้นหา"
            options={topfilm}
            sx={{ width: 250, height: 7 }}
          />
        </Stack>
        <Stack direction={"row"}>
          <ButtonMenu>
            <HomeIcon sx={{ fontSize: "35px", color: "#b1b3b9" }} />
          </ButtonMenu>
          <ButtonMenu>
            <OndemandVideoIcon sx={{ fontSize: "35px", color: "#b1b3b9" }} />
          </ButtonMenu>
          <ButtonMenu>
            <StorefrontIcon sx={{ fontSize: "35px", color: "#b1b3b9" }} />
          </ButtonMenu>
          <ButtonMenu>
            <GroupsIcon sx={{ fontSize: "35px", color: "#b1b3b9" }} />
          </ButtonMenu>
        </Stack>

        <Stack direction={"row"}>
          <ButtonMenu>
            <WidgetsIcon sx={{ fontSize: "35px", color: "#b1b3b9" }} />
          </ButtonMenu>
          <ButtonMenu>
            <MessageIcon sx={{ fontSize: "35px", color: "#b1b3b9" }} />
          </ButtonMenu>
          <ButtonMenu>
            <NotificationsIcon sx={{ fontSize: "35px", color: "#b1b3b9" }} />
          </ButtonMenu>
          <Box sx={{ padding: 1 }}>
            <Avatar />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

const topfilm = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
