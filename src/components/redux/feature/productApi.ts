import { baseApi } from "../api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: '/projects',
        method: 'GET',
      }),
    }),
    CreateProject: builder.mutation({
      query: () => ({
        url: '/projects',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useCreateProjectMutation } = productApi;