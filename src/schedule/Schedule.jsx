import React from 'react'
import SideBar from '../sidebar/SideBar'
import { useParams } from 'react-router-dom'

const Schedule = () => {

  return (
    <div className='flex'>
      <SideBar/>
      <h1 className=' m-auto font-bold text-[72px]'> Welcome to Schedule</h1>

    </div>
  )
}
export default Schedule