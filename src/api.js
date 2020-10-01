import axios from "axios";

const instance = axios.create({
  baseURL: "https://loft-taxi.glitch.me/",
});

export const login = (data) => instance.post("/auth", data);

export const registration = (data) => instance.post("/register", data);

export const saveCard = (data) => instance.post("/card", data);
