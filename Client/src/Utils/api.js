import axios from "axios";
import { VITE_DEV_URL } from "../Utils/helpers";

const VITE_STRIPE_APP_KEY = `907d6755fc636ff3b275b1dc2627e18c28b014619ac1c8694b3fa15870eac81bd69f0cded11a51ed2f47bcb1f1a466342894de0f7c4859e0bf70c2c51434c24ce895ca4955cd715d912103eeca4fa6852b64d2866c1cf6191c5946b54d7def6ef3919efee7dec802a2a3aa45e4d46bd15dbab361628643d7400f72d8788a7cba`;

export const fetchDataFromApi = async (url) => {
  console.log("url", url);
  try {
    const { data } = await axios({
      method: "get",
      url: VITE_DEV_URL + url,
      headers: {
        Authorization: "Bearer " + VITE_STRIPE_APP_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: VITE_DEV_URL,
  headers: {
    Authorization: "bearer " + VITE_STRIPE_APP_KEY,
  },
});
