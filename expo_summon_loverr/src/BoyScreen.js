import React from "react";
import { ActivityIndicator, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import {
  ButtonConfirm,
  Container,
  TitleFunction,
  TextButtonConfirm,
  LoadingContainer,
} from "./stylesComponent";

import { pushToken } from "./service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BoyScreen = () => {
  const [loading, setLoading] = React.useState(true);
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    AsyncStorage.getItem("id", (e, result) => {
      if (e) {
        alert(e);
        return;
      }
      setId(result);
      setLoading(false);
    });
  }, []);

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      setLoading(true);
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        setLoading(false);
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      const result = await pushToken(token);

      if (result?.id) {
        await AsyncStorage.setItem("id", String(result?.id));
        setId(result?.id);
      }
      setLoading(false);
    } else {
      setLoading(false);
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };

  return (
    <Container center={true}>
      <TitleFunction>
        {id ? `Mã của bạn là "${id}"` : "Bạn chưa có mã số, bấm để lấy mã"}
      </TitleFunction>
      <ButtonConfirm>
        <TextButtonConfirm onPress={registerForPushNotificationsAsync}>
          {id ? "Lấy lại mã" : "Lấy mã"}
        </TextButtonConfirm>
      </ButtonConfirm>
      {loading && (
        <LoadingContainer>
          <ActivityIndicator size={"large"} color={"#fff"} />
        </LoadingContainer>
      )}
    </Container>
  );
};
