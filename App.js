/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import 'react-native-gesture-handler';
import Navigation from "./src/navigation";

class App extends Component {
  render(){
    return (
      <>
        <Navigation />
      </>
    );
  }
};

export default App;
