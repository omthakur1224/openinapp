import React from 'react'
import SideBar from '../sidebar/SideBar'
import { useParams } from 'react-router-dom'

const Invoice = () => {

  return (
    <div className='flex'>
      <SideBar/>
      <h1 className=' m-auto font-bold text-[72px]'> Welcome to Invoice</h1>

    </div>
  )
}
export default Invoice