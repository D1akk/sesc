import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import logo_new_upper from "../static/logo_upper.svg";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import header_paint from "../static/header-painting.jpg";
import Button from "@mui/material/Button";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Login from "../pages/auth/Login";
import StudentRegister from "../pages/auth/StudentRegister";
import TeacherRegister from "../pages/auth/TeacherRegister";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SescLogo from "../static/Profile/LogoSescProfile.png";
import ProfileLogo from "../static/Profile/profile_logo.png";

import TemporaryDrawer from "../drawer/TemporaryDrawer";
import ConstructionIcon from "@mui/icons-material/Construction";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const Nav = styled.div`
  background: #09304a;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 3rem;
  font-size: 2rem;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #09304a;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 90px;
  bottom: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ userName, setUserName }) => {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const [showStudentRegister, setShowStudentRegister] = useState(false);
  const [showTeacherRegister, setShowTeacherRegister] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showSidebar = () => setSidebar(!sidebar);

  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openProfileMenu = Boolean(anchorEl);

  const handleLogOut = () => {
    localStorage.removeItem("userName");
    dispatch(logout());
    handleCloseAnchor();
    navigate("/");
  };

  const handleTeacherProfile = () => {
    navigate("/teacher-user-profile");
  };

  const handleClickAnchor = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setDrawerOpen(true);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="header">
          <div className="header-paint">
            <img
              className="header-paint-logo"
              src={header_paint}
              alt="«Северо-Восточный федеральный университет» имени М.К. Аммосова"
            />
          </div>
          <div className="search-content">
            <TextField
              label="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="logo-upper-content">
            <img
              className="logo_upper"
              src={logo_new_upper}
              alt="«Северо-Восточный федеральный университет» имени М.К. Аммосова"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <Nav className="sideNav">
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          {localStorage.getItem("secretar") && (
            <p
              style={{
                textAlign: "center",
                position: "absolute",
                right: "300px",
                color: "white",
              }}>
              Секретарь
            </p>
          )}
          {!state.token ? (
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              style={{
                textAlign: "center",
                position: "absolute",
                right: "100px",
                color: "black",
                backgroundColor: "#64a5c8",
              }}>
              Вход
            </Button>
          ) : (
            <>
              <Button
                id="basic-button"
                aria-controls={openProfileMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openProfileMenu ? "true" : undefined}
                style={{
                  textAlign: "center",
                  position: "absolute",
                  right: "100px",
                  color: "black",
                  backgroundColor: "#64a5c8",
                }}
                onClick={(e) => handleClickAnchor(e)}>
                Личный кабинет
              </Button>
              {localStorage.getItem("userTeacher") === "true" &&
                localStorage.getItem("userStudent") === "false" && (
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "20px",
                    }}
                    size="large"
                    color="success">
                    <ConstructionIcon onClick={(e) => toggleDrawer(e)} />
                  </IconButton>
                )}
            </>
          )}
          <TemporaryDrawer
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openProfileMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                width: 200,
              },
            }}
            onClose={handleCloseAnchor}>
            <div
              style={{
                backgroundImage: `url(${SescLogo})`,
                backgroundRepeat: "no-repeat",
              }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={ProfileLogo} />
                </ListItemAvatar>
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#d9f3f2",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <ListItemText>{userName}</ListItemText>
                {localStorage.getItem("userTeacher") === "true" ? (
                  <ListItemText>Сотрудник</ListItemText>
                ) : (
                  <ListItemText>Обучающийся</ListItemText>
                )}
              </ListItem>
            </div>
            <Divider style={{ marginTop: 2 }} />
            <MenuItem onClick={handleTeacherProfile}>My account</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: { borderRadius: 20 },
            }}>
            <DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {!showStudentRegister && !showTeacherRegister ? (
                <Login
                  setOpen={setOpen}
                  setShowStudentRegister={setShowStudentRegister}
                  setShowTeacherRegister={setShowTeacherRegister}
                  setUserName={setUserName}
                />
              ) : showStudentRegister ? (
                <StudentRegister
                  setOpen={setOpen}
                  setUserName={setUserName}
                  setShowStudentRegister={setShowStudentRegister}
                />
              ) : (
                <TeacherRegister
                  setOpen={setOpen}
                  setUserName={setUserName}
                  setShowTeacherRegister={setShowTeacherRegister}
                />
              )}
            </DialogContent>
          </Dialog>
        </Nav>
        <SidebarNav className="SideBarNav" sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
