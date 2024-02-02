import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { TbNotes } from "react-icons/tb";
import { PiSquaresFour } from "react-icons/pi";
import { HiOutlineCalendar, HiOutlineCog, } from 'react-icons/hi';
import { MdNotifications, MdOutlineDriveFolderUpload, MdSpaceDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  
   const navigate=useNavigate();

  return (
    <Sidebar aria-label="Sidebar with logo branding example" className='w-[217px] h-[100vh]'>
      <Sidebar.Logo href="#" className="text-left" img="/images/Subtract.svg" imgAlt="logo">
        Base
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" className={`text-left ${selectedItem === 'Dashboard' ? 'text-blue-500' : ''}`} icon={PiSquaresFour} onClick={() => navigate('/dashboard')}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/upload" className={`text-left ${selectedItem === 'Upload' ? 'text-blue-500' :''}`} icon={MdOutlineDriveFolderUpload} onClick={() => navigate('/upload')}>
            Upload
          </Sidebar.Item>
          <Sidebar.Item href="/invoice" className={`text-left ${selectedItem === 'Invoice' ? 'text-blue-500' : ''}`} icon={MdSpaceDashboard} onClick={() => navigate('/invoice')}>
            Invoice
          </Sidebar.Item>
          <Sidebar.Item href="/schedule" className={`text-left ${selectedItem === 'Schedule' ? 'text-blue-500' : ''}`} icon={TbNotes} onClick={() => navigate('/schedule')}>
            Schedule
          </Sidebar.Item>
          <Sidebar.Item href="/calendar" className={`text-left ${selectedItem === 'Calendar' ? 'text-blue-500' : ''}`} icon={HiOutlineCalendar} onClick={() => navigate('/calendar')}>
            Calendar
          </Sidebar.Item>
          <Sidebar.Item href="/motifications" className={`text-left ${selectedItem === 'Notifications' ? 'text-blue-500' : ''}`} icon={MdNotifications} onClick={() => navigate('/notifications')}>
            Notifications
          </Sidebar.Item>
          <Sidebar.Item href="/setting" className={`text-left ${selectedItem === 'Setting' ? 'text-blue-500' : ''}`} icon={HiOutlineCog} onClick={() => navigate('/Setting')}>
            Setting
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
