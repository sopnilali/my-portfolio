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
    blogDetails: builder.query({
        query: (id) => ({
          url: `/blogs/details/${id}`,
          method: 'GET',
        }),
        providesTags: ['blogs'],
      }),
    updateBlog: builder.mutation({
        query: (arg) => ({
          url: `/blogs/${arg.id}`,
          method: 'PUT',
          body: arg.data,
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

export const { useCreateBlogMutation, useBlogDetailsQuery, useUpdateBlogMutation, useDeleteBlogMutation, useGetAllBlogsQuery } = blogApi;