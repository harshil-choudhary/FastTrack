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
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';

import styles from './style';
import { Images } from '../../utils';
import style from "./style";

const genders = [
  {
    id:1,
    name:"Male",   
  },
  {
    id:2,
    name:"Female",
  },
  {
    id:3,
    name:"Other",
  },
]

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedValue:'',
      date:new Date(),
      show_date:false,
      date_placeholder:true,
      changeNameHeader:false,
      changeNumberHeader:false,
      changeMailHeader:false,
    }
  }

  showDatepicker = () => {
    this.setState({show_date:true});
  };

  formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
  };

  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'ios')
      this.setState({show_date: true})
    else
      this.setState({show_date: false})
    this.setState({date:currentDate, date_placeholder:false});
  };

  changeNameHeader(){
    this.setState({changeNameHeader:!(this.state.changeNameHeader)})
  }

  changeNumberHeader(){
    this.setState({changeNumberHeader:!(this.state.changeNumberHeader)})
  }

  changeMailHeader(){
    this.setState({changeMailHeader:!(this.state.changeMailHeader)})
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
              <Text style={styles.barText}>Edit Profile</Text>
            </View>
          </View>
        
          <View style={styles.formWrapper}>
            <View style={styles.profileImgWrapper}>
              <Image source={Images.drawer_profile} style={styles.profileImg}/>
              <Image source={Images.edit_pic} style={styles.editPic}/>
            </View>
            <View style={styles.listWrapper}>
              <View style={styles.formBox}>
              <Text style={(this.state.changeNameHeader)?(styles.fieldText2):(styles.fieldText)}>Name</Text>
              <Image source={Images.person_Icon} style={styles.searchIcon }/>
                <TextInput style={styles.formshortInput} 
                  placeholderTextColor="#000000"
                  onChangeText={() => {}}  
                  onFocus={()=>{this.changeNameHeader()}}
                  onEndEditing={()=>{this.changeNameHeader()}}
                  placeholder="test83"/>
                
              </View>
              
              <View style={styles.formBox}>
                <Image source={Images.call_Icon} style={styles.searchIcon }/>
                <Text style={(this.state.changeNumberHeader)?(styles.fieldText2):(styles.fieldText)}>Mobile Number</Text>
                <TextInput style={styles.formshortInput} 
                  placeholderTextColor="#000000"
                  onChangeText={() => {}}
                  onFocus={()=>{this.changeNumberHeader()}}
                  onEndEditing={()=>{this.changeNumberHeader()}} 
                  placeholder="9999999999"/>
              </View>

              <View style={styles.formBox}>
              <Image source={Images.email} style={styles.searchIcon }/>
              <Text style={(this.state.changeMailHeader)?(styles.fieldText2):(styles.fieldText)}>Email or Username</Text>
                <TextInput style={styles.formshortInput} 
                  placeholderTextColor="#000000"
                  onChangeText={() => {}}
                  onFocus={()=>{this.changeMailHeader()}}  
                  onEndEditing={()=>{this.changeMailHeader()}} 
                  placeholder="test83"/>
              </View>

              <View style={styles.formRow}>
                <TouchableOpacity style={styles.formShortBox} 
                  onPress={this.showDatepicker}> 
                  <Image source={Images.date_calendar} style={styles.searchIcon}/>
                  <Text style={styles.placeholderText}>{(this.state.date_placeholder)?("Date of Birth"):(this.formatDate(this.state.date))}</Text>
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
                <View style={styles.formShortBox2}> 
                  <Picker
                  selectedValue={this.state.selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}>
                    <Picker.Item label = "Select Gender" value = "Select Gender" />
                  {genders.map(gen => <Picker.Item key={gen.id} label={gen.name} value={gen.name} />)}
                  </Picker>
                </View>
              </View>

              <TouchableOpacity style={styles.submit} onPress={()=>{}}>
                <Text style={styles.submitText}>Save</Text>
              </TouchableOpacity>
            </View>  
          </View>
        </View>
      </View>
    );
  }
}
