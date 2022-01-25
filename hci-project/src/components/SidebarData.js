import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from "react-icons/bs";
import * as DiIcons from "react-icons/di";

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <BsIcons.BsHouseFill />
  },
  {
    title: 'Executive Management',
    path: '/execMan',
    icon: <BsIcons.BsFilePerson />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Minister',
        path: '/execMan/minister',
        icon: <BsIcons.BsFilePerson />
      },
      {
        title: 'Leadership',
        path: '/execMan/leadership',
        icon: <BsIcons.BsFilePerson />
      }
    ]
  },
  {
    title: 'Departments',
    path: '/departments',
    icon: <BsIcons.BsFillDiagram3Fill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Administration',
        path: '/departments/administration',
        icon: <BsIcons.BsPersonFill />,
        cName: 'sub-nav'
      },
      {
        title: 'Appropriate Technology Service',
        path: '/departments/ats',
        icon: <BsIcons.BsGlobe />,
        cName: 'sub-nav'
      },
      {
        title: 'Information',
        path: '/departments/information',
        icon: <BsIcons.BsInfo />
      },
      {
        title: 'Information Communications Technology',
        path: '/departments/ict',
        icon: <BsIcons.BsFillChatRightQuoteFill />,
        cName: 'sub-nav'
      },{
        title: 'Lesotho National Broadcasting Service',
        path: '/departments/lnbs',
        icon: <BsIcons.BsBroadcast />,
        cName: 'sub-nav'
      },
      {
        title: 'Lesotho Postal Service',
        path: '/departments/lps',
        icon: <BsIcons.BsFillFilePptFill />,
        cName: 'sub-nav'
      },
      {
        title: 'Science and Technology',
        path: '/departments/sciAndTec',
        icon: <DiIcons.DiReact />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Media',
    path: '/media',
    icon: <BsIcons.BsNewspaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'News and Events',
        path: '/media/news',
        icon: <BsIcons.BsNewspaper />
      },
      {
        title: 'Gallery',
        path: '/media/gallery',
        icon: <BsIcons.BsPersonBoundingBox />
      },
      {
        title: 'Speeches',
        path: '/media/speeches',
        icon: <BsIcons.BsFillChatLeftTextFill />
      }
    ]
  },
  {
    title: 'Documents',
    path: '/documents',
    icon: <BsIcons.BsFilePdf />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Legislation',
        path: '/documents/legislation',
        icon: <BsIcons.BsInfoCircleFill />
      },
      {
        title: 'Policy',
        path: '/documents/policy',
        icon: <BsIcons.BsInfoCircleFill />
      }
    ]
  },
  {
    title: 'Tenders',
    path: '/tenders',
    icon: <BsIcons.BsInfoCircleFill />
  },
  {
    title: 'Vancancy',
    path: '/vacancy',
    icon: <BsIcons.BsInfoCircleFill />
  },
  {
    title: 'Contact US',
    path: '/contact',
    icon: <BsIcons.BsTelephoneFill />
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <BsIcons.BsInfoCircleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'About Us',
        path: '/about/about',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'History',
        path: '/about/history',
        icon: <BsIcons.BsInfoCircleFill />
      }
    ]
  }
];
