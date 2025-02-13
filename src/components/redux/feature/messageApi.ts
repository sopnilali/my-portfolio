import { baseApi } from "../api/baseApi";


const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMessages: builder.query({
        query: () => ({
          url: '/messages',
          method: 'GET',
        }),
        providesTags: ['messages'],
    }),
    createMessage: builder.mutation({
      query: (data) => ({
        url: '/messages',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['messages'],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/messages/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['messages'],
    })
  }),
});

export const { useCreateMessageMutation, useDeleteMessageMutation, useGetAllMessagesQuery } = messageApi;