import React, { useEffect } from 'react';
import { LogBox, Text, Alert } from 'react-native';
import { BoyScreen } from './src/BoyScreen';
import { GirlScreen } from './src/GirlScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import messages from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen';
import CodePush from 'react-native-code-push';

const Tab = createBottomTabNavigator();

const showAlertInForeground = ({ body, title }) => {
  if (title && body) {
    Alert.alert(title, body);
  }
};

LogBox.ignoreLogs(['Remote debugger']);

const App = () => {
  useEffect(() => {
    messages()
      .getInitialNotification()
      .then((data) => {
        data.notification && showAlertInForeground(data.notification);
      });

    const sub = messages().onMessage((data) => {
      if (data.notification) showAlertInForeground(data.notification);
    });

    SplashScreen.hide();

    CodePush.sync({
      deploymentKey: 'C02N3nnXBMcnPPu1Db7st6PObgehKFo4puRHj',
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE,
    }).catch((e) => {
      alert(e.message);
    });

    return () => {
      sub();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#36b1e1',
            tabBarHideOnKeyboard: true,
            lazy: false,
          }}>
          <Tab.Screen
            name="GirlScreen"
            component={GirlScreen}
            options={{
              tabBarIcon: () => <Text>👩</Text>,
              title: 'Dành choa gấu cái',
            }}
          />
          <Tab.Screen
            name="BoyScreen"
            component={BoyScreen}
            options={{
              tabBarIcon: () => <Text>👦</Text>,
              title: 'Dành choa Gấu đực',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default CodePush({ checkFrequency: CodePush.CheckFrequency.MANUAL })(App);
