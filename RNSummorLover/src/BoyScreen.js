import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { ButtonConfirm, Container, TitleFunction, TextButtonConfirm, LoadingContainer } from './stylesComponent';

import { pushToken } from './service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messages from '@react-native-firebase/messaging';

export const BoyScreen = () => {
  const [loading, setLoading] = React.useState(true);
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    AsyncStorage.getItem('id', (e, result) => {
      if (e) {
        alert(e);
        return;
      }
      setId(result);
      setLoading(false);
    });
  }, []);

  const registerForPushNotificationsAsync = async () => {
    try {
      setLoading(true);
      await messages().registerDeviceForRemoteMessages();
      const existingStatus = await messages().requestPermission();

      if (existingStatus !== 1) {
        alert('Failed to get push token for push notification!');
        setLoading(false);
        return;
      }
      const token = await messages().getToken();
      console.log('token', token);
      const result = await pushToken(token);

      if (result?.id) {
        await AsyncStorage.setItem('id', String(result?.id));
        setId(result?.id);
      }
      setLoading(false);
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }
  };

  return (
    <Container center={true}>
      <TitleFunction>{id ? `Mã của bạn là "${id}"` : 'Bạn chưa có mã số, bấm để lấy mã'}</TitleFunction>
      <ButtonConfirm>
        <TextButtonConfirm onPress={registerForPushNotificationsAsync}>
          {id ? 'Lấy lại mã' : 'Lấy mã'}
        </TextButtonConfirm>
      </ButtonConfirm>
      {loading && (
        <LoadingContainer>
          <ActivityIndicator size={'large'} color={'#fff'} />
        </LoadingContainer>
      )}
    </Container>
  );
};
