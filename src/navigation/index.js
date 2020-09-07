import 'react-native-gesture-handler';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//Screens
import Login from '../screens/Login';
import Home from '../screens/Home';
import SpeedLimit from '../screens/SpeedLimit';
import HistoryReplay from '../screens/HistoryReplay';
import Report_Distance from '../screens/Report_Distance';
import Report_Trip from '../screens/Report_Trip';
import Complaint from '../screens/Complaint';
import RSA from '../screens/RSA';
import ViewProfile from '../screens/ViewProfile';
import ChangePassword from '../screens/ChangePassword';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';


function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
       <Drawer.Screen name="Home" component={Home}/>
  </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={DrawerNav} />
        <Stack.Screen name="SpeedLimit" component={SpeedLimit} />
        <Stack.Screen name="HistoryReplay" component={HistoryReplay} />
        <Stack.Screen name="Report_Distance" component={Report_Distance} />
        <Stack.Screen name="Report_Trip" component={Report_Trip} />
        <Stack.Screen name="Complaint" component={Complaint} />
        <Stack.Screen name="RSA" component={RSA} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

