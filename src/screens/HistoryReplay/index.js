import React, { Component, useState } from "react";
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
  Platform,
  OpaqueColorValue,
} from "react-native";
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';

import styles from './style';
import { Images } from '../../utils';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

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

export default class HistoryReplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedValue:'',
      date:new Date(),
      start_time:new Date(),
      end_time:new Date(), 
      show_start_time:false,
      show_end_time:false,
      show_date:false,
      date_placeholder:true,
      start_time_placeholder:true, 
      end_time_placeholder:true,  
    }
  }


  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'ios')
      this.setState({show_date: true})
    else
      this.setState({show_date: false})
    this.setState({date:currentDate, date_placeholder:false});
  };

  onChangeStartTime = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    if (Platform.OS === 'ios')
      this.setState({show_start_time: true})
    else
      this.setState({show_start_time: false})
    this.setState({start_time:currentDate, start_time_placeholder:false});
  };

  onChangeEndTime = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    if (Platform.OS === 'ios')
      this.setState({show_end_time: true})
    else
      this.setState({show_end_time: false})
    this.setState({end_time:currentDate, end_time_placeholder:false});
  };

  formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
  };

  formatTime = (time) => {
    return `${time.getHours()}:${time.getMinutes()}`;
  };

  showDatepicker = () => {
    this.setState({show_date:true});
  };

  showStartTimepicker = () => {
    this.setState({show_start_time:true});
  };

  showEndTimepicker = () => {
    this.setState({show_end_time:true});
  };

 
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
              <Text style={styles.barText}>History Replay</Text>
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
              <Image source={Images.date_calendar} style={styles.searchIcon}/>
              <TouchableOpacity style={styles.formshortInput} 
                onPress={this.showDatepicker}> 
                <Text style={styles.placeholderText}>{(this.state.date_placeholder)?("Date"):(this.formatDate(this.state.date))}</Text>
                {this.state.show_date && (
                <DateTimePicker
                  onPress={this.showDatepicker}
                  style={styles.formshortInput}
                  testID="dateTimePicker"
                  value={this.state.date}
                  mode='date'
                  is24Hour={true}
                  display="default"
                  onChange={this.onChangeDate}
                />
              )}
              </TouchableOpacity>
            </View>

            <View style={styles.formBox}>
              <Image source={Images.time_clock} style={styles.searchIcon}/>
              <TouchableOpacity style={styles.formshortInput} 
                onPress={this.showStartTimepicker}> 
                <Text style={styles.placeholderText}>{(this.state.start_time_placeholder)?("Start Time"):(this.formatDate(this.state.start_time))}</Text>
                {this.state.show_start_time && (
                <DateTimePicker
                  onPress={this.showStartTimepicker}
                  style={styles.formshortInput}
                  testID="dateTimePicker"
                  value={this.state.start_time}
                  mode='time'
                  is24Hour={true}
                  display="default"
                  onChange={this.onChangeStartTime}
                />
              )}
              </TouchableOpacity>
            </View>

            <View style={styles.formBox}>
              <Image source={Images.time_clock} style={styles.searchIcon}/>
              <TouchableOpacity style={styles.formshortInput} 
                onPress={this.showEndTimepicker}> 
                <Text style={styles.placeholderText}>{(this.state.end_time_placeholder)?("End Time"):(this.formatDate(this.state.end_time))}</Text>
                {this.state.show_end_time && (
                <DateTimePicker
                  onPress={this.showStartTimepicker}
                  style={styles.formshortInput}
                  testID="dateTimePicker"
                  value={this.state.end_time}
                  mode='time'
                  is24Hour={true}
                  display="default"
                  onChange={this.onChangeEndTime}
                />
              )}
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
