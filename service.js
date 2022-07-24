import axios from "axios";

const EXPO_SERVICE_URL = "https://exp.host/--/api/v2/push/send";
const SERVER_TOKEN = "https://json-server-demo.glitch.me/games/";

export const pushNotification = async (token, title, body) => {
  const bodyRequest = {
    to: token,
    title,
    body,
  };

  try {
    await axios.post(EXPO_SERVICE_URL, bodyRequest);
    alert("Triệu hồi đã được gửi");
  } catch (e) {
    alert("Lỗi triệu hồi: " + JSON.stringify(e));
  }
};

export const pushToken = async (token) => {
  try {
    const result = await axios.post(SERVER_TOKEN, { token });
    return result.data;
  } catch (e) {
    alert("Không thể lưu token: " + JSON.stringify(e));
  }
};

export const getTokenById = async (id) => {
  try {
    const result = await axios.get(SERVER_TOKEN + id);
    console.log("getTokenById", result);
    return result.data;
  } catch (e) {
    alert("Không thể lưu token: " + JSON.stringify(e));
  }
};
