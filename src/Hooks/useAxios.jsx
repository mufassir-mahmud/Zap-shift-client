import axios from 'axios';
import React from 'react';
const axiosInstace = axios.create({
  baseURL: 'https://zap-shift-server-five-theta.vercel.app'
});
const useAxios = () => {
    return axiosInstace
  };

export default useAxios;