import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';

import styles from './style';
import { Images } from '../../utils';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hidePassword:true,
    }
  }


 
  render() {
    return (
      <ImageBackground source={Images.bg_map} resizeMode="cover" style={styles.imgBg}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            
            
          
            <View style={styles.formWrapper}>

              <View style={styles.loginImageWrapper}>
                <Image source={Images.logo_new2} style={styles.logo}/>
                <Text style={styles.loginText}>Login</Text>
              </View>
              
              <View style={styles.formBox}>
                <TextInput style={styles.formshortInput} 
                  placeholderTextColor="#6f7a8c"
                  onChangeText={() => {}}  
                  underlineColorAndroid="transparent"
                  placeholder="Username"/>
               
               <Image source={Images.person_Icon} style={styles.searchIcon}/>
              </View>
              <View style={styles.formBox}>
              <TextInput style={styles.formshortInput} 
                placeholderTextColor="#6f7a8c"
                onChangeText={() => {}}  
                placeholder="Password"
                secureTextEntry={this.state.hidePassword}/>
                <TouchableOpacity onPress={()=>{this.setState({hidePassword:!(this.state.hidePassword)})}}>
                  <Image source={(this.state.hidePassword)?(Images.eye_line):(Images.eye)} style={styles.searchIcon}/>
                </TouchableOpacity>
              </View>
              <View style={styles.formBox}>
                <TextInput style={styles.formshortInput} 
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#6f7a8c"
                  onChangeText={() => {}}  
                  placeholder="Mobile Number"/>
                <Image source={Images.call_Icon} style={styles.callIcon }/>
              </View>
              

              <TouchableOpacity style={styles.submit} onPress={()=>{this.props.navigation.navigate("Home")}}>
                <Text style={styles.submitText}>Login</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </ImageBackground> 
    );
  }
}
