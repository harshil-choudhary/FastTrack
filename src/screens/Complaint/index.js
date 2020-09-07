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

export default class Complaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedValue:'',
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
              <Text style={styles.barText}>Complaint</Text>
            </View>
          </View>
        
          <View style={styles.formWrapper}>
            <View style={styles.pickerBox}>
              <Image source={Images.car_white} style={styles.carIcon}/>
              <Picker
                selectedValue={this.state.selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}>
                  <Picker.Item label = "All Vehicles" value = "All Vehicles" />
                {vehicles.map(vehc => <Picker.Item key={vehc.id} label={vehc.name} value={vehc.name} />)}
              </Picker>
              <Image source={Images.white_dropdown} style={styles.dropdown}/>
            </View>
            <View style={styles.formBox}>
              <TextInput style={styles.formshortInput} 
                placeholderTextColor="#6f7a8c"
                onChangeText={() => {}}  
                placeholder="Full Name"/>
              <Image source={Images.person_Icon} style={styles.searchIcon}/>
            </View>
            <View style={styles.formBox}>
              <TextInput style={styles.formshortInput} 
                placeholderTextColor="#6f7a8c"
                onChangeText={() => {}}  
                placeholder="Mobile Number"/>
              <Image source={Images.call_Icon} style={styles.callIcon }/>
            </View>

            <View style={styles.formBigBox}>
              <TextInput style={styles.formlongInput} 
                placeholderTextColor="#6f7a8c"
                onChangeText={() => {}}  
                placeholder="Complaint"
                multiline={true}
                textAlignVertical= "top"/>
              {/* <Image source={Images.search_grey} style={styles.searchIcon}/> */}
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
