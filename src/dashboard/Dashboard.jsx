import React from 'react'
import SideBar from '../sidebar/SideBar'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

  const {id}=useParams();
  console.log("params",id)
  return (
    <div className='flex'>
      <SideBar/>
      <h1 className=' m-auto font-bold text-[72px]'> Welcome to Dashboard</h1>

    </div>
  )
}
export default Dashboard