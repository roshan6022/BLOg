// utils/apiPaths.js
export const BASE_URL = "http://localhost:3000";
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
    UPDATE_PROFILE: "/api/auth/profile",
  },

  POSTS: {
    GET_POSTS: "/api/posts",
    CREATE_POST: "/api/posts",
    GET_POST_BY_ID: (postId) => `/api/posts/${postId}`,
    UPDATE_POST: (postId) => `/api/posts/${postId}`,
    DELETE_POST: (postId) => `/api/posts/${postId}`,
  },
};

export const getFullUrl = (path) => `${BASE_URL}${path}`;
