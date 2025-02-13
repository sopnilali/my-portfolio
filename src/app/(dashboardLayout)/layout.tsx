import React from 'react'
import SideBar from '@/components/shared/SideBar'
import { Toaster } from 'sonner'

const dashboardLayoutPage = ({children}: {children: React.ReactNode}) => {

  return (
    <div className='md:flex block'>
    <SideBar/>
    <div className='flex-1'>
    {children}
    <Toaster />
    </div>
    </div>
  )
}

export default dashboardLayoutPage