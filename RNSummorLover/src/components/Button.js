import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export const ButtonConfirm = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonConfirm} onPress={onPress}>
      <Text style={styles.textButtonConfirm}>{title || 'Xác nhận'}</Text>
    </TouchableOpacity>
  );
};
