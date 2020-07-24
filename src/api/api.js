import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f3a0b0f6-2a5c-48ae-801d-a556e9ca2683'
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        return res.data;
      })
  },
  deleteUsers(id) {
    return instance.delete(`follow/${id}`)
      .then(res => {
        return res.data;
      })
  },
  postUsers(id) {
    return instance.post(`follow/${id}`)
      .then(res => {
        return res.data;
      })
  },
  auth(id) {
    return instance.get(`auth/me/`)
      .then(res => {
        return res.data;
      })
  },
}
