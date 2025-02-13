"use client"
import { useCreateMessageMutation } from '@/components/redux/feature/messageApi'
import SectionTitle from '@/components/shared/SectionTitle'
import { TMessage } from '@/types'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const ContactPage = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TMessage>()

  const [addMessage] = useCreateMessageMutation()


  const onSubmit: SubmitHandler<TMessage> = async (data) => {
    const toastId = toast.loading('Logging in');

    const res = await addMessage(data)
    if (res) {
      reset()
      toast.success('Message Add Successfull', { id: toastId, duration: 2000 });
    }
  }



  return (
    <div>
      <SectionTitle title='Contact Form' />
      <p className='text-center'><i>Feel free to reach out to us for any questions or inquiries.</i></p>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name?.type === "required" && (
            <p role="alert" className='text-red-500'>Name is required</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email?.type === "required" && (
            <p role="alert" className='text-red-500'>Email is required</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            {...register('message', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          {errors.message?.type === "required" && (
            <p role="alert" className='text-red-500'>Message is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactPage