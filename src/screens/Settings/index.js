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
  Switch,
  Modal,
} from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import styles from './style';
import { Images } from '../../utils';
import style from "./style";

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

var ring = [
  { label: 'Default', value: 'Default' },
  { label: 'Silent', value: 'Silent' },
  { label: 'Alarm 1', value: 'Alarm 1' },
  { label: 'Alarm 2', value: 'Alarm 2' },
]

var buzzInt = [
  { label: '15 Seconds', value: '15 Seconds' },
  { label: '20 Seconds', value: '20 Seconds' },
  { label: '25 Seconds', value: '25 Seconds' },
]

var mapDisplay = [
  { label: 'Satellite View', value: 'Satellite View' },
  { label: 'Normal View', value: 'Normal View' },
  { label: 'Terrain View', value: 'Terrain View' },
]

var freshInt = [
  { label: '15 Seconds', value: '15 Seconds' },
  { label: '30 Seconds', value: '30 Seconds' },
  { label: '45 Seconds', value: '45 Seconds' },
  { label: '1 Minute', value: '1 Minute' },
  { label: '2 Minutes', value: '2 Minutes' },
  { label: '3 Minutes', value: '3 Minutes' },
]



export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      volumeSwitch:false,
      notifSwitch:false,
      showNotifRingModal:false,
      showBuzzIntModal:false,
      showBuzzRingModal:false,
      showMapDisplayModal:false,
      showFreshIntModal:false,
      selected_notifRing:'',
      notifRingRadioInitial:null,
      selected_buzzRing:'',
      buzzRingRadioInitial:null,
      selected_buzzInt:'',
      buzzIntRadioInitial:null,
      selected_mapDisplay:'',
      mapDisplayRadioInitial:null,
      selected_freshInt:'',
      freshIntRadioInitial:null,
    }
  }

  toggleVolumeSwitch = (value) => { 
    this.setState({volumeSwitch: value})
  }

  toggleNotifSwitch = (value) => { 
    this.setState({notifSwitch: value})
  }

  notifRingRadioChange(value){
    this.setState({selected_notifRing:value})
    switch(value) {
      case "Default":
        this.setState({notifRingRadioInitial:0});
        break; 
      case "Silent":
        this.setState({notifRingRadioInitial:1});
        break; 
      case "Alarm 1":
        this.setState({notifRingRadioInitial:2});
        break; 
      case "Alarm 2":
        this.setState({notifRingRadioInitial:3});
        break; 
    }
  }

  buzzIntRadioChange(value){
    this.setState({selected_buzzInt:value, showBuzzIntModal:false})
    switch(value) {
      case "15 Seconds":
        this.setState({buzzIntRadioInitial:0});
        break; 
      case "20 Seconds":
        this.setState({buzzIntRadioInitial:1});
        break; 
      case "25 Seconds":
        this.setState({buzzIntRadioInitial:2});
        break; 
    }
  }

  buzzRingRadioChange(value){
    this.setState({selected_buzzRing:value})
    switch(value) {
      case "Default":
        this.setState({buzzRingRadioInitial:0});
        break; 
      case "Silent":
        this.setState({buzzRingRadioInitial:1});
        break; 
      case "Alarm 1":
        this.setState({buzzRingRadioInitial:2});
        break; 
      case "Alarm 2":
        this.setState({buzzRingRadioInitial:3});
        break; 
    }
  }

  mapDisplayRadioChange(value){
    this.setState({selected_mapDisplay:value, showMapDisplayModal:false})
    switch(value) {
      case "Satellite View":
        this.setState({buzzIntRadioInitial:0});
        break; 
      case "Normal View":
        this.setState({buzzIntRadioInitial:1});
        break; 
      case "Terrain View":
        this.setState({buzzIntRadioInitial:2});
        break; 
    }
  }

  freshIntRadioChange(value){
    this.setState({selected_freshInt:value, showFreshIntModal:false})
    switch(value) {
      case "15 Seconds":
        this.setState({freshIntRadioInitial:0});
        break; 
      case "30 Seconds":
        this.setState({freshIntRadioInitial:1});
        break; 
      case "45 Seconds":
        this.setState({freshIntRadioInitial:2});
        break; 
      case "1 Minute":
        this.setState({freshIntRadioInitial:3});
        break;
      case "2 Minutes":
        this.setState({freshIntRadioInitial:4});
        break;
      case "3 Minutes":
        this.setState({freshIntRadioInitial:5});
        break;
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
              <Text style={styles.barText}>Settings</Text>
            </View>
          </View>
        
          <View style={styles.formWrapper}>
            
            <View style={styles.listWrapper}>
              <View style={styles.fieldHeader}>
                <Text style={styles.headerText}>Volume</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.fieldText1}>Select Volume</Text>
                <Text style={styles.fieldText2}>Tick to enable app sound</Text>
                <Switch style={styles.switch} onValueChange = {this.toggleVolumeSwitch} value={this.state.volumeSwitch}/>
              </View>

              <View style={styles.fieldHeader}>
                <Text style={styles.headerText}>Notification Setting</Text>
              </View>
              <View style={styles.fieldWithBorder}>
                <Text style={styles.fieldText1}>Notification Sound</Text>
                <Text style={styles.fieldText2}>Tick to enable app sound</Text>
                <Switch style={styles.switch} onValueChange = {this.toggleNotifSwitch} value={this.state.notifSwitch}/>
              </View>
              <TouchableOpacity style={styles.fieldWithBorder} onPress={()=>{this.setState({showNotifRingModal:true})}}>
                <Text style={styles.fieldText1}>Notification Ringtone</Text>
                <Text style={styles.fieldText2}>Ringtone: {this.state.selected_notifRing}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fieldWithBorder} onPress={()=>{this.setState({showBuzzIntModal:true})}}>
                <Text style={styles.fieldText1}>Buzzer Interval</Text>
                <Text style={styles.fieldText2}>Buzzer Interval: {this.state.selected_buzzInt}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.field} onPress={()=>{this.setState({showBuzzRingModal:true})}}>
                <Text style={styles.fieldText1}>Buzzer Ringtone</Text>
                <Text style={styles.fieldText2}>Ringtone: {this.state.selected_buzzRing}</Text>
              </TouchableOpacity>

              <View style={styles.fieldHeader}>
                <Text style={styles.headerText}>Map Display Setting</Text>
              </View>
              <TouchableOpacity style={styles.field} onPress={()=>{this.setState({showMapDisplayModal:true})}}>
                <Text style={styles.fieldText1}>Select the Map Display</Text>
                <Text style={styles.fieldText2}>Mapview: {this.state.selected_mapDisplay}</Text>
              </TouchableOpacity>
              
              <View style={styles.fieldHeader}>
                <Text style={styles.headerText}>Fresh Interval</Text>
              </View>
              <TouchableOpacity style={styles.field} onPress={()=>{this.setState({showFreshIntModal:true})}}>
                <Text style={styles.fieldText1}>Fresh Interval</Text>
                <Text style={styles.fieldText2}>Value: {this.state.selected_freshInt}</Text>
              </TouchableOpacity>
            </View>  
          </View>

          <Modal                //Notification Ringtone
            animationType="slide"
            transparent={true}
            visible={this.state.showNotifRingModal}>
            <TouchableOpacity style={styles.modalScreenWrapper} onPress={()=>{this.setState({showNotifRingModal:false})}}>
              <View style={styles.modalWrapper}>
                <Text style={styles.modalText}>Notification Ringtone</Text>
                <RadioForm style={styles.radioList} buttonSize={15}
                    labelStyle={styles.radioLabel}
                    radio_props={ring}
                    initial={this.state.notifRingRadioInitial}
                    onPress={(value) => {this.notifRingRadioChange(value)}} />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={()=>{this.setState({selected_notifRing:'', showNotifRingModal:false})}}>
                    <Text style={styles.modalText2}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.setState({showNotifRingModal:false})}}>
                    <Text style={styles.modalText2}>SET RINGTONE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>

          <Modal                //Buzzer Interval
            animationType="slide"
            transparent={true}
            visible={this.state.showBuzzIntModal}>
            <TouchableOpacity style={styles.modalScreenWrapper} onPress={()=>{this.setState({showBuzzIntModal:false})}}>
              <View style={styles.modalWrapper}>
                <Text style={styles.modalText}>Buzzer Interval</Text>
                <RadioForm style={styles.radioList} buttonSize={15}
                    labelStyle={styles.radioLabel}
                    radio_props={buzzInt}
                    initial={this.state.buzzIntRadioInitial}
                    onPress={(value) => {this.buzzIntRadioChange(value)}} />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={()=>{this.setState({selected_buzzInt:'', showBuzzIntModal:false})}}>
                    <Text style={styles.modalText2}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>

      

          <Modal                    //Buzzer Ringtone
            animationType="slide"
            transparent={true}
            visible={this.state.showBuzzRingModal}>
            <TouchableOpacity style={styles.modalScreenWrapper} onPress={()=>{this.setState({showBuzzRingModal:false})}}>
              <View style={styles.modalWrapper}>
                <Text style={styles.modalText}>Buzzer Ringtone</Text>
                <RadioForm style={styles.radioList} buttonSize={15}
                    labelStyle={styles.radioLabel}
                    radio_props={ring}
                    initial={this.state.buzzRIngRadioInitial}
                    onPress={(value) => {this.buzzRingRadioChange(value)}} />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={()=>{this.setState({selected_buzzRing:'', showBuzzRingModal:false})}}>
                    <Text style={styles.modalText2}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.setState({showBuzzRingModal:false})}}>
                    <Text style={styles.modalText2}>SET RINGTONE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>

          <Modal                //Map Display
            animationType="slide"
            transparent={true}
            visible={this.state.showMapDisplayModal}>
            <TouchableOpacity style={styles.modalScreenWrapper} onPress={()=>{this.setState({showMapDisplayModal:false})}}>
              <View style={styles.modalWrapper}>
                <Text style={styles.modalText}>Select the Map Display</Text>
                <RadioForm style={styles.radioList} buttonSize={15}
                    labelStyle={styles.radioLabel}
                    radio_props={mapDisplay}
                    initial={this.state.mapDisplayRadioInitial}
                    onPress={(value) => {this.mapDisplayRadioChange(value)}} />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={()=>{this.setState({selected_mapDisplay:'', showMapDisplayModal:false})}}>
                    <Text style={styles.modalText2}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>

          <Modal                //Fresh Interval
            animationType="slide"
            transparent={true}
            visible={this.state.showFreshIntModal}>
            <TouchableOpacity style={styles.modalScreenWrapper} onPress={()=>{this.setState({showFreshIntModal:false})}}>
              <View style={styles.modalWrapper}>
                <Text style={styles.modalText}>Buzzer Interval</Text>
                <RadioForm style={styles.radioList} buttonSize={15}
                    labelStyle={styles.radioLabel}
                    radio_props={freshInt}
                    initial={this.state.freshIntRadioInitial}
                    onPress={(value) => {this.freshIntRadioChange(value)}} />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={()=>{this.setState({selected_freshInt:'', showFreshIntModal:false})}}>
                    <Text style={styles.modalText2}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>

        </View>
      </View>
    );
  }
}
