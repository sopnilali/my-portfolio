import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react'

const Commonlayout =  async({children}: {children: React.ReactNode}) => {

  const session = await getServerSession(authOptions);
  return (
    <div>
         <Navbar session={session} />
         <div className='min-h-screen'>{children}</div>
         <Footer/>
    </div>
  )
}

export default Commonlayout