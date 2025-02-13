import { baseApi } from "../api/baseApi";


const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
        query: () => ({
          url: '/blogs',
          method: 'GET',
        }),
        providesTags: ['blogs'],
      }),
    createBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['blogs'],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['blogs'],
    })
  }),
});

export const { useCreateBlogMutation, useDeleteBlogMutation, useGetAllBlogsQuery } = blogApi;