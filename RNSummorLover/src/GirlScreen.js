import React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { pushNotification, getTokenById } from './service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { functions } from './const';
import { LoadingView } from './components/Loading';
import { ButtonConfirm } from './components/Button';

export const GirlScreen = () => {
  const [loading, setLoading] = React.useState(true);
  const [id, setId] = React.useState('');
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    AsyncStorage.getItem('boy_friend', (e, data) => {
      if (e) {
        Alert.alert(e.message);
        return;
      }
      const _data = JSON.parse(data);
      setToken(_data?.token);
      setId(_data?.id);
      setLoading(false);
    });
  }, []);

  const onChangeId = (txt) => setId(txt);

  const confirmId = async () => {
    setLoading(true);
    const result = await getTokenById(id);
    if (result?.token) {
      setToken(result.token);
      await AsyncStorage.setItem('boy_friend', JSON.stringify(result));
    }
    setLoading(false);
  };

  const confirmNewBoy = async () => {
    await AsyncStorage.setItem('boy_friend', '');
    setToken('');
    setId('');
  };

  return (
    <View style={styles.container}>
      {token ? (
        <>
          <Text style={styles.titleFunction}>Mã của gấu là {id} 👦</Text>
          <ButtonConfirm onPress={confirmNewBoy} title="Có gấu mới" />
        </>
      ) : (
        <>
          <Text style={styles.labelInput}>Mã của gấu 👦</Text>
          <TextInput style={styles.input} onChangeText={onChangeId} placeholder="Nhập mã của gấu đực vào đây" />
          <View style={styles.whiteSpace} />
          <ButtonConfirm onPress={confirmId} />
          <View style={styles.whiteSpace} />
        </>
      )}

      {!!token && (
        <>
          <Text style={styles.titleFunction} />
          <Text style={styles.titleFunction}>Triệu hồi gấu đực</Text>
          <View style={styles.containerFunction}>
            {functions.map((func, index) => (
              <TouchableOpacity
                style={[styles.buttonFunction, { backgroundColor: func.color, marginBottom: 15 }]}
                onPress={async () => {
                  setLoading(true);
                  await pushNotification(token, func.title, func.bodyNotify);
                  setLoading(false);
                }}
                key={index}>
                <Text style={styles.textButtonFunction}>{func.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
      <LoadingView visible={loading} />
    </View>
  );
};
