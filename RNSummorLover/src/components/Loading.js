import React from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
import { styles } from '../styles';

export const LoadingView = ({ visible }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.loadingContainer}>
        <View style={styles.loadingView}>
          <ActivityIndicator size={'small'} color={'#000'} />
          <Text style={{ marginStart: 20 }}>Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};
