import {axiosAgent} from '../libs/axios';

const responseBody = response => response.data;

export const requests = {
  get: (url, params = {}) => axiosAgent.get(url, params).then(responseBody),
};
