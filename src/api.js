import axios from "axios";

const instance = axios.create({
  baseURL: "https://loft-taxi.glitch.me/",
});

export const login = (data) => instance.post("/auth", data);

export const registration = (data) => instance.post("/register", data);

export const saveCard = (data) => instance.post("/card", data);

export const fetchAddressList = () => instance.get("/addressList");
export const getRoute = (address1, address2) =>
  instance.get(`/route?address1=${address1}&address2=${address2}`);
