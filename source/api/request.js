import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  async (config) => {
    config.baseURL =
      'https://d3wlh33my4.execute-api.us-east-1.amazonaws.com/sandbox';
    config.headers['x-api-key'] = '3BQcAo10CU78KccuuW8rj8O7l1dUNZL054YAq1LT';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
