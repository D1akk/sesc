import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "СУНЦ",
    path: "/home-sesc",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "О СУНЦ",
        path: "/home-sesc/about-us",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Документы",
        path: "/home-sesc/documents",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Профили",
    path: "/SescProfiles",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Физико-технический",
        path: "/SescProfiles/SescProfiles1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Математика и IT",
        path: "/SescProfiles/SescProfiles2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Биолого-экологический",
        path: "/SescProfiles/SescProfiles3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Химико-технологический",
        path: "/SescProfiles/SescProfiles4",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Лингвистический",
        path: "/SescProfiles/SescProfiles5",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Студентам",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Сотрудникам",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Научно-исследовательская работа",
    path: "/nir",
    icon: <IoIcons.IoIosBook />,
  },
  {
    title: "Конференции",
    path: "/conferences",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "БЛОГ",
    path: "/blog",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Поддержка",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
