import { baseApi } from "../api/baseApi";


const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: '/projects',
        method: 'GET',
      }),
      providesTags: ['projects'],
    }),
    CreateProject: builder.mutation({
      query: (data) => ({
        url: '/projects',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['projects'],
    }),
    updateProject: builder.mutation({
      query: (arg) => ({
        url: `/projects/${arg.id}`,
        method: 'PUT',
        body: arg.data,
      }),
      invalidatesTags: ['projects'],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['projects'],
    }),
    projectDetails: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'GET',
      }),
      providesTags: ['projects'],
    })
  }),
});

export const { useGetAllProjectsQuery, useCreateProjectMutation, useDeleteProjectMutation, useProjectDetailsQuery, useUpdateProjectMutation } = projectApi;