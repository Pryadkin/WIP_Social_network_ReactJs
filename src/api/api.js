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
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object.');
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(res => {
        return res.data;
      })
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(res => {
        return res.data;
      })
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status });
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me/`)
      .then(res => {
        return res.data;
      })
  },
}
