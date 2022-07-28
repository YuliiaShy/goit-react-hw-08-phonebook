import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const token = state.auth.token;
    headers.set('Authorization', token);
    return headers;
  },
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, phone },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    changeContact: builder.mutation({
      query: ({ changedId, name, number }) => ({
        url: `/contacts/${changedId}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useChangeContactMutation,
} = API;
