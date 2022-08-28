import React from 'react';
import { Alert, TouchableOpacity, View, Text } from 'react-native';

import { pushToken } from './service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messages from '@react-native-firebase/messaging';
import { styles } from './styles';
import { LoadingView } from './components/Loading';
import { ButtonConfirm } from './components/Button';

export const BoyScreen = () => {
  const [loading, setLoading] = React.useState(true);
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    AsyncStorage.getItem('id', (e, result) => {
      if (e) {
        Alert.alert(e);
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
        Alert.alert('Failed to get push token for push notification!');
        setLoading(false);
        return;
      }
      const token = await messages().getToken();

      const result = await pushToken(token);

      if (result?.id) {
        await AsyncStorage.setItem('id', String(result?.id));
        setId(result?.id);
      }
      setLoading(false);
    } catch (e) {
      Alert.alert(e.message);
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, styles.containerCenter]}>
      <Text style={styles.titleFunction}>
        {id ? `Mã của bạn là "${id}", đưa choa gấu thôi nào 😟😟😟` : 'Bạn chưa có mã số, bấm để lấy mã'}
      </Text>
      <ButtonConfirm onPress={registerForPushNotificationsAsync} title={id ? 'Lấy lại mã' : 'Lấy mã'} />
      <LoadingView visible={loading} />
    </View>
  );
};
