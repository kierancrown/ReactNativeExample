import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TodayScreen from './screens/Today';
import {Colours} from './colours';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './screens/RootStackPrams';
import WebViewScreen from './screens/WebView';

import APIContextProvider from './context/api';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <APIContextProvider>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: isDarkMode
                ? Colours.dark.background
                : Colours.light.background,
            },
            headerTintColor: isDarkMode
              ? Colours.dark.text
              : Colours.light.text,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <RootStack.Screen name="Today" component={TodayScreen} />
          <RootStack.Screen name="WebView" component={WebViewScreen} />
        </RootStack.Navigator>
      </APIContextProvider>
    </NavigationContainer>
  );
};

export default App;
