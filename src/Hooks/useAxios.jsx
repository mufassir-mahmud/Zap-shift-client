import axios from 'axios';
import React from 'react';
const axiosInstace = axios.create({
  baseURL: 'http://localhost:3000'
});
const useAxios = () => {
    return axiosInstace
  };

export default useAxios;