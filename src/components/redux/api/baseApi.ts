import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-portfolio-server-amber.vercel.app/api/v2',
    credentials: 'include',
  }),
  tagTypes: ['blogs', 'projects', 'messages'],
  endpoints: () => ({}),
});