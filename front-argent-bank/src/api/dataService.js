import axios from "axios";
import { BASEURL } from "./config";

export function dataService() {
  return axios.create({
    baseURL: BASEURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function dataServiceProfile(token) {
  return axios.create({
    baseURL: BASEURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
