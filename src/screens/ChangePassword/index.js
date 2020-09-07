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
} from "react-native";
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';

import styles from './style';
import { Images } from '../../utils';
import {Picker} from '@react-native-community/picker';

const vehicles = [
  {
    id:1,
    name:"Kittu",
    speed_limit:'55',
    date:'2020-06-11',
    status:'Running',
    engine:'On',
    speed:'40',
    address:"C-8, 2nd Cross Ave Rd, Block C, Industrial Area, Surajpur Site 4, Greater Noida, Uttar Pradesh 201310, India",
  },
  {
    id:2,
    name:"DL3SAM9722",
    speed_limit:'0',
    date:'2020-08-06',
    status:'Not Connected',
    engine:'On',
    speed:'0',
    address:"C-8, 2nd Cross Ave Rd, Block C, Industrial Area, Surajpur Site 4, Greater Noida, Uttar Pradesh 201310, India",
  },
]

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedValue:'',
      hideConfirmPassword:true,
      hideCurrentPassword:true,
      hideNewPassword:true,
    }
  }


 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          
          <View style={styles.upperBar}>
            <View style={styles.backIconContainer}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home");}}>
                <Image source={Images.back} style={styles.barMenuIcon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.headingContainer}>
              <Text style={styles.barText}>Change Password</Text>
            </View>
          </View>
        
          <View style={styles.formWrapper}>
            
            <View style={styles.formBox}>
              <TextInput style={styles.formshortInput} 
                placeholderTextColor="#6f7a8c"
                onChangeText={() => {}}  
                placeholder="Current Password"
                secureTextEntry={this.state.hideCurrentPassword}/>
                <TouchableOpacity onPress={()=>{this.setState({hideCurrentPassword:!(this.state.hideCurrentPassword)})}}>
                  <Image source={(this.state.hideCurrentPassword)?(Images.eye_line):(Images.eye)} style={styles.searchIcon}/>
                </TouchableOpacity>
                
            </View>

            <View style={styles.formBox}>
              <TextInput style={styles.formshortInput} 
                placeholderTextColor="#6f7a8c"
                onChangeText={() => {}}  
                placeholder="New Password"
                secureTextEntry={this.state.hideNewPassword}/>
                <TouchableOpacity onPress={()=>{this.setState({hideNewPassword:!(this.state.hideNewPassword)})}}>
                  <Image source={(this.state.hideNewPassword)?(Images.eye_line):(Images.eye)} style={styles.searchIcon}/>
                </TouchableOpacity>
            </View>

            <View style={styles.formBox}>
              <TextInput style={styles.formshortInput} 
                placeholderTextColor="#6f7a8c"
                onChangeText={() => {}}  
                placeholder="Confirm Password"
                secureTextEntry={this.state.hideConfirmPassword}/>
                <TouchableOpacity onPress={()=>{this.setState({hideConfirmPassword:!(this.state.hideConfirmPassword)})}}>
                  <Image source={(this.state.hideConfirmPassword)?(Images.eye_line):(Images.eye)} style={styles.searchIcon}/>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity style={styles.submit} onPress={()=>{}}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}
