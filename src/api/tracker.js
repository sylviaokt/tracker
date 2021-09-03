import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "http://d963-151-192-78-125.ngrok.io",
});

instance.interceptors.request.use(
  // called when request is made
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // called when there is an error in the request
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
