import React from "react";
import { StyleSheet, Text, LogBox, Alert } from "react-native";
import { BoyScreen } from "./src/BoyScreen";
import { GirlScreen } from "./src/GirlScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const showAlertInForeground = ({ body, title }) => {
  Alert.alert(title, body);
};

Notifications.addNotificationResponseReceivedListener((e) => {
  showAlertInForeground(e.notification.request.content);
});

Notifications.addNotificationReceivedListener((e) => {
  showAlertInForeground(e.request.content);
});

const Tab = createBottomTabNavigator();
LogBox.ignoreLogs(["Remote debugger"]);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#fff",
            tabBarActiveBackgroundColor: "#36b1e1",
            tabBarHideOnKeyboard: true,
            lazy: false,
          }}
        >
          <Tab.Screen
            name="GirlScreen"
            component={GirlScreen}
            options={{
              tabBarIcon: () => <Text>👩</Text>,
              title: "Dành choa gấu cái",
            }}
          />
          <Tab.Screen
            name="BoyScreen"
            component={BoyScreen}
            options={{
              tabBarIcon: () => <Text>👦</Text>,
              title: "Dành choa gấu đực",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
