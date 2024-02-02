import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { TbNotes } from "react-icons/tb";
import { PiSquaresFour } from "react-icons/pi";
import { HiOutlineCalendar, HiOutlineCog, } from 'react-icons/hi';
import { MdNotifications, MdOutlineDriveFolderUpload, MdSpaceDashboard } from 'react-icons/md';

export default function SideBar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <Sidebar aria-label="Sidebar with logo branding example" className='w-[217px] h-[100vh]'>
      <Sidebar.Logo href="#" className="text-left" img="/images/Subtract.svg" imgAlt="logo">
        Base
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" className={`text-left ${selectedItem === 'Dashboard' ? 'text-blue-500' : ''}`} icon={PiSquaresFour} onClick={() => handleItemClick('Dashboard')}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/upload" className={`text-left ${selectedItem === 'Upload' ? 'text-blue-500' :''}`} icon={MdOutlineDriveFolderUpload} onClick={() => handleItemClick('Upload')}>
            Upload
          </Sidebar.Item>
          <Sidebar.Item href="#" className={`text-left ${selectedItem === 'Invoice' ? 'text-blue-500' : ''}`} icon={MdSpaceDashboard} onClick={() => handleItemClick('Invoice')}>
            Invoice
          </Sidebar.Item>
          <Sidebar.Item href="#" className={`text-left ${selectedItem === 'Schedule' ? 'text-blue-500' : ''}`} icon={TbNotes} onClick={() => handleItemClick('Schedule')}>
            Schedule
          </Sidebar.Item>
          <Sidebar.Item href="#" className={`text-left ${selectedItem === 'Calendar' ? 'text-blue-500' : ''}`} icon={HiOutlineCalendar} onClick={() => handleItemClick('Calendar')}>
            Calendar
          </Sidebar.Item>
          <Sidebar.Item href="#" className={`text-left ${selectedItem === 'Notifications' ? 'text-blue-500' : ''}`} icon={MdNotifications} onClick={() => handleItemClick('Notifications')}>
            Notifications
          </Sidebar.Item>
          <Sidebar.Item href="#" className={`text-left ${selectedItem === 'Setting' ? 'text-blue-500' : ''}`} icon={HiOutlineCog} onClick={() => handleItemClick('Setting')}>
            Setting
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
