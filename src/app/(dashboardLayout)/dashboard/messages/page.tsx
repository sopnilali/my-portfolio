'use client'
import { useDeleteMessageMutation, useGetAllMessagesQuery } from '@/components/redux/feature/messageApi'
import React from 'react'
import { toast } from 'sonner'

const ViewMessagePages = () => {


  const {data: messages} = useGetAllMessagesQuery(undefined)

  const [deleleMessage] = useDeleteMessageMutation()

  
  const onDeleteMessage = async(messageId : string) => {

          const res = await deleleMessage(messageId)
          if (res) {
            const toastId = toast.loading('Logging in');
            toast.success('Delete Message Successfull', { id: toastId, duration: 2000 });
          }

  }


  return (
    <div>
        <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Messages</h1>
      <div className="space-y-4">
        {messages?.data?.length > 0 ? messages?.data.map((message : any) => (
          <div
            key={message._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
          >
            {/* Delete button */}
            <button
              onClick={() => onDeleteMessage(message._id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              aria-label="Delete message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>

            {/* Message content */}
            <h2 className="text-xl font-semibold text-gray-800">{message.name}</h2>
            <p className="text-gray-600 mt-2">{message.message}</p>
            <p className="text-sm text-gray-500 mt-2">{message.email}</p>
          </div>
        )) : <p>No messages found.</p>}
      </div>
    </div>

    </div>
  )
}

export default ViewMessagePages