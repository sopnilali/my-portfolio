import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react'

export const metadata = {
  title: 'User Information',
  description: 'Displays user information',
}

const UserInfoPage = async() => {

    const session = await getServerSession(authOptions);


  return (
    <div>
         <div >
         <h1 className="text-2xl font-bold text-gray-800 my-6 ml-4 ">User Information</h1>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user email: {session?.user?.email}
          </h1>
          <Image
            src={
              session?.user?.image ||
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
            width={100}
            height={100}
            alt="user image"
            className="mx-auto rounded-full mt-5"
          />
        </>
      )}
    </div>
    </div>
  )
}

export default UserInfoPage