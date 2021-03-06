import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TodayScreen from './screens/Today';
import {Colours} from './utils/colours';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './screens/RootStackPrams';
import WebViewScreen from './screens/WebView';

import APIContextProvider from './context/api';
import MarkdownViewScreen from './screens/MarkdownView';
import {QueryClient, QueryClientProvider} from 'react-query';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
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
            <RootStack.Screen
              name="Today"
              component={TodayScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="WebView"
              component={WebViewScreen}
              options={{title: 'View Article'}}
            />
            <RootStack.Screen
              name="MarkdownView"
              component={MarkdownViewScreen}
              options={{title: 'View Article'}}
            />
          </RootStack.Navigator>
        </APIContextProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
