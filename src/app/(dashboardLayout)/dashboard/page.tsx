import StatsCard from '@/components/shared/StatsCard'
import { ServerModuler } from '@/utils'
import React from 'react'

export const metadata = {
  title: 'Dashboard | MD Abdul Adud Portfolio',
  description: 'Welcome to your dashboard, here you can track your progress, manage your projects, and communicate with your team.'
}

const DashboardPage = async () => {

  const totalProject = await ServerModuler.getAllProjects()
  const totalBlog = await ServerModuler.AllBlogs()
  const totalMessage = await ServerModuler.getAllMessages()



  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Total Blog Card */}
            <StatsCard
              title="Total Blog"
              value={totalBlog?.data ? totalBlog?.data?.length : 0}
              icon={
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  ></path>
                </svg>
              }
              color="blue"
            />

            {/* Total Project Card */}
            <StatsCard
              title="Total Project"
              value={totalProject?.data ? totalProject?.data?.length : 0}
              icon={
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              }
              color="green"
            />
            {/* Total Message Card */}
            <StatsCard
              title="Total Message"
              value={totalMessage?.data ? totalMessage?.data?.length : 0}
              icon={
                <svg
                  className="w-6 h-6 text-gray-600" // Adjust size and color as needed
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              }
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage