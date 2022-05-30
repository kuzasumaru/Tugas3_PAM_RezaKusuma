import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Satu"}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      >
        <Stack.Screen
          name="Satu"
          component={Page1}
          options={{
            title: "",
            headerLeft: () => <FontAwesome name="bars" size={24} color="white" style={{marginLeft:20}}/>,
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
          }}
        />
        <Stack.Screen
          name="Dua"
          component={Page2}
          options={{
            title: "Hiling.id",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



