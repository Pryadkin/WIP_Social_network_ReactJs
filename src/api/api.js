import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f3a0b0f6-2a5c-48ae-801d-a556e9ca2683'
  }
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        return res.data;
      })
  },
  async deleteUsers(id) {
    return instance.delete(`follow/${id}`)
      .then(res => {
        return res.data;
      })
  },
  async postUsers(id) {
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
  async getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(res => {
        return res.data;
      })
  },
  async getStatus(userId) {
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
  async me() {
    return instance.get(`auth/me/`)
      .then(res => res.data);
  },
  async login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
      .then(res => res.data);
  },
  async delete() {
    return instance.delete(`auth/login`)
      .then(res => res.data);
  }
};