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
  Modal,
} from "react-native";
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import styles from './style';
import { Images } from '../../utils';
import style from "./style";

var language = [
  { label: 'English', value: 'en' },
  { label: 'हिन्दी', value: 'hi' },
]

export default class ViewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showLanguageModal:false,
      selected_language:'',
      languageRadioInitial:0,
    }
  }

  languageRadioChange(value){
    this.setState({ 
      selected_language:value, 
      showLanguageModal:false 
    })
    if (value=='en')
      this.setState({languageRadioInitial:0})
    else if (value=='hi')
      this.setState({languageRadioInitial:1})
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
              <Text style={styles.barText}>View Profile</Text>
            </View>
          </View>
        
          <View style={styles.formWrapper}>
            <View style={styles.profileImgWrapper}>
              <Image source={Images.drawer_profile} style={styles.profileImg}/>
            </View>
            <View style={styles.listWrapper}>
              <View style={styles.field}>
                <Image source={Images.person_Icon} style={styles.icon}/>
                <Text style={styles.fieldText}>test83</Text>
              </View>
              <View style={styles.field}>
                <Image source={Images.call_Icon} style={styles.icon}/>
                <Text style={styles.fieldText}>9999999999</Text>
              </View>
              <View style={styles.field}>
                <Image source={Images.date_calendar} style={styles.icon}/>
                <Text style={styles.fieldText}></Text>
              </View>
              <View style={styles.field}>
                <Image source={Images.gender} style={styles.icon}/>
                <Text style={styles.fieldText}></Text>
              </View>
              <View style={styles.field}>
                <Image source={Images.email} style={styles.icon}/>
                <Text style={styles.fieldText}>test83</Text>
              </View>
              <TouchableOpacity style={styles.field}
                onPress={()=>{this.props.navigation.navigate("ChangePassword")}}>
                <Image source={Images.change_password} style={styles.icon}/>
                <Text style={styles.fieldText2}>Change Password</Text>
                <Image source={Images.grey_arrow_left} style={styles.arrowicon}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.field}
                onPress={()=>{this.props.navigation.navigate("EditProfile")}}>
                <Image source={Images.gender} style={styles.icon}/>
                <Text style={styles.fieldText2}>Edit Profile</Text>
                <Image source={Images.grey_arrow_left} style={styles.arrowicon}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.field}
                onPress={()=>{this.setState({showLanguageModal:true})}}>
                <Image source={Images.change_language} style={styles.icon}/>
                <Text style={styles.fieldText2}>Change Language</Text>
                <Image source={Images.grey_arrow_left} style={styles.arrowicon}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.field}
                onPress={()=>{this.props.navigation.navigate("Login")}}>
                <Image source={Images.logout} style={styles.icon}/>
                <Text style={styles.fieldText2}>Log Out</Text>
                <Image source={Images.grey_arrow_left} style={styles.arrowicon}/>
              </TouchableOpacity>
            </View>  
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showLanguageModal}>
            <TouchableOpacity style={styles.modalScreenWrapper} onPress={()=>{this.setState({showLanguageModal:false})}}>
              <View style={styles.modalWrapper}>
                <Text style={styles.modalText}>Choose Language</Text>
                <RadioForm style={styles.radioList} buttonSize={15}
                    labelStyle={styles.radioLabel}
                    radio_props={language}
                    initial={this.state.languageRadioInitial}
                    onPress={(value) => {this.languageRadioChange(value)}} />
              </View>
            </TouchableOpacity>
          </Modal>

        </View>
      </View>
    );
  }
}
