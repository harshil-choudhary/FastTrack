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

export default class Report_Distance extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedValue:'',
      start_date:new Date(),
      end_date:new Date(), 
      show_start_date:false,
      show_end_date:false,
      start_date_placeholder:true,
      end_date_placeholder:true,
    }
  }

  formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
  };

  showStartDatepicker = () => {
    this.setState({show_start_date:true});
  };

  showEndDatepicker = () => {
    this.setState({show_end_date:true});
  };

  onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'ios')
      this.setState({show_start_date: true})
    else
      this.setState({show_start_date: false})
    this.setState({start_date:currentDate, start_date_placeholder:false});
  };

  onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'ios')
      this.setState({show_end_date: true})
    else
      this.setState({show_end_date: false})
    this.setState({end_date:currentDate, end_date_placeholder:false});
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
              <Text style={styles.barText}>Distance Report</Text>
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
                onPress={this.showStartDatepicker}> 
                <Text style={styles.placeholderText}>{(this.state.start_date_placeholder)?("Start Date"):(this.formatDate(this.state.start_date))}</Text>
                {this.state.show_start_date && (
                <DateTimePicker
                  onPress={this.showStartDatepicker}
                  style={styles.formshortInput}
                  testID="dateTimePicker"
                  value={this.state.start_date}
                  mode='date'
                  is24Hour={true}
                  display="default"
                  onChange={this.onChangeStartDate}
                />
              )}
              </TouchableOpacity>
            </View>

            <View style={styles.formBox}>
              <Image source={Images.date_calendar} style={styles.searchIcon}/>
              <TouchableOpacity style={styles.formshortInput} 
                onPress={this.showEndDatepicker}> 
                <Text style={styles.placeholderText}>{(this.state.end_date_placeholder)?("End Date"):(this.formatDate(this.state.end_date))}</Text>
                {this.state.show_end_date && (
                <DateTimePicker
                  onPress={this.showEndDatepicker}
                  style={styles.formshortInput}
                  testID="dateTimePicker"
                  value={this.state.end_date}
                  mode='date'
                  is24Hour={true}
                  display="default"
                  onChange={this.onChangeEndDate}
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
