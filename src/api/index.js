import Api from 'wzn-api';


const api = new Api();
// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    return newConfig;
  },
  (error) => {
    const result = Promise.reject(error);
    return result;
  },
);

// 添加响应拦截器
api.interceptors.response.use(
  (response) => {
    let result = { ...response };
    if (response.data) {
      result = response.data;
    }
    return result;
  },
  (error) => {
    const result = Promise.reject(error);
    return result;
  },
);
export default api;
