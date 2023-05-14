import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const fetchDetails = (url) => {
  return axios
    .get(`${url}`)
    .then((res) => res.data);
};

export const useFetchDetials = (queryKey, url) => {
  return useQuery([queryKey], () => fetchDetails(url), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
