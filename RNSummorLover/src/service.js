import axios from 'axios';

const EXPO_SERVICE_URL = 'https://fcm.googleapis.com/fcm/send';
const SERVER_TOKEN = 'https://json-server-demo.glitch.me/games/';
const SV_KEY =
  'AAAAFv74NeE:APA91bE9LYw40i4AkwdRCQ8j-2Z3KGeVXOhZIjS8BwCIhOemzecfxycf3o_02cpp1uml05pHQID1A_IqD6KDVNoWqq8C-NSKDUjBbqBs5CsqvMY4BxCiGd32-oP99U4VijV_DJqyUhO9';

export const pushNotification = async (token, title, body) => {
  const bodyRequest = {
    to: token,
    notification: {
      title,
      body,
    },
    priority: 'high',
  };

  try {
    const res = await axios.post(EXPO_SERVICE_URL, bodyRequest, {
      headers: {
        authorization: 'key=' + SV_KEY,
      },
    });

    console.log('res', res);
    alert('Triệu hồi đã được gửi');
  } catch (e) {
    alert('Lỗi triệu hồi: ' + JSON.stringify(e));
  }
};

export const pushToken = async (token) => {
  try {
    const result = await axios.post(SERVER_TOKEN, { token });
    return result.data;
  } catch (e) {
    alert('Không thể lưu token: ' + JSON.stringify(e));
  }
};

export const getTokenById = async (id) => {
  try {
    const result = await axios.get(SERVER_TOKEN + id);
    console.log('getTokenById', result);
    return result.data;
  } catch (e) {
    alert('Không thể lưu token: ' + JSON.stringify(e));
  }
};
