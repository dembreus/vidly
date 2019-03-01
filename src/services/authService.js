import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
import { loginWithJwt } from "./authService";

const url = `${apiUrl}/auth`;
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(url, { email, password });
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.setItem(tokenKey);
    const user = jwtDecode(jwt);

    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt
};
