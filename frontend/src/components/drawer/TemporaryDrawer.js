import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

import { useNavigate } from "react-router-dom";

const TemporaryDrawer = ({ userName, drawerOpen, setDrawerOpen }) => {
  const navigate = useNavigate();
  const list = (drawerOpen) => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}>
      <List>
        <ListItem>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => navigate("/student-list")}>
            <ListItemIcon>
              <TextIncreaseIcon />
            </ListItemIcon>
            <ListItemText primary="Список студентов" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => navigate("/research-add")}>
            <ListItemIcon>
              <PersonSearchIcon />
            </ListItemIcon>
            <ListItemText primary="Добавить НИР" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Добавить оценки для НИР" />
          </ListItemButton>
        </ListItem>
        {localStorage.getItem("secretar") && (
          <>
            <Divider />
            <ListItem>
              <ListItemButton onClick={() => navigate("/add-nir-marks")}>
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="Сгенерировать отчет НИР" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
      <Divider />
      <List>
        {["Заметки", "Календарь", "Статистика"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <EventNoteIcon />
                ) : index === 1 ? (
                  <CalendarMonthIcon />
                ) : index === 2 ? (
                  <SignalCellularAltIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={drawerOpen}>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}>
          {list(drawerOpen)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
