import client from "./client";

import config from "../config/config.json";
const tokenKey = config.tokenKey;

export async function login(email, password) {
  const { data: result, ok } = await client.post("/client-login", {
    email,
    password,
  });

  if (result.data.token) {
    const tokenValue = result.data.token;
    localStorage.setItem(tokenKey, tokenValue);

    return result;
  }
}

export async function register(name, email, password, repassword) {
  const { data: result, ok } = await client.post("/client-register", {
    name,
    email,
    password,
    c_password: repassword,
  });

  if (result.data.token) {
    const tokenValue = result.data.token;
    localStorage.setItem(tokenKey, tokenValue);

    return result;
  }
}

export function loginWithtokenValue(tokenValue) {
  localStorage.setItem(tokenKey, tokenValue);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export async function getCurrentUser() {
  try {
    const tokenValue = localStorage.getItem(tokenKey);

    if (tokenValue) {
      const { data: result, ok } = await client.post("/profile-info");

      if (ok) return result[0];
    }
  } catch (error) {
    return null;
  }
}

export function gettokenValue() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  register,
  logout,
  getCurrentUser,
  gettokenValue,
};
