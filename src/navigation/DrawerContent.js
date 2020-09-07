import React, {Component} from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { Images } from '../utils';

const { width, height } = Dimensions.get('window');



export class DrawerContent extends React.Component {

    state={
        renderReport:false,
    }

    renderReportView(renderReport){
        if (renderReport){
            return(
                <View style={styles.reportView}>
                    <DrawerItem 
                        icon={() => (<Image source={Images.drawer_distance} style={styles.drawerIcon}/>)}
                        label="Distance"
                        labelStyle={styles.labelText}
                        onPress={() => {this.props.navigation.navigate('Report_Distance')}}
                    />
    
                    <DrawerItem 
                        icon={() => (<Image source={Images.drawer_trip} style={styles.drawerIcon}/>)}
                        label="Trip"
                        labelStyle={styles.labelText}
                        onPress={() => {this.props.navigation.navigate('Report_Trip')}}
                    />
                </View>
            )
        }
    }

    render(){
    return(
        <View style={{flex:1, backgroundColor: "#000000"}}>
            <DrawerContentScrollView {...this.props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Image source={Images.drawer_profile} style={styles.profileIcon}/>
                        <View style={styles.userContentBox}>
                            <Text style={styles.userContentBoxText}>Test 83</Text>
                            <Text style={styles.userContentBoxText}>9999999999</Text>
                            <View style={styles.userContentBoxBottom}>
                                <TouchableOpacity style={styles.userButton}
                                    onPress={() => {this.props.navigation.navigate("ViewProfile")}}>
                                    <Image source={Images.drawer_user} style={styles.userIcons}/>
                                    <Text style={styles.userContentBoxText}>Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.userButton}
                                onPress={() => {this.props.navigation.navigate("Settings")}}>
                                    <Image source={Images.drawer_setting} style={styles.userIcons}/>
                                    <Text style={styles.userContentBoxText}>Settings</Text>
                                </TouchableOpacity>
                            </View>
                        </View>   
                    </View>

                    <View style={styles.drawerSection}>
                        <DrawerItem 
                            icon={() => (<Image source={Images.drawer_home} style={styles.drawerIcon}/>)}
                            label="Home"
                            labelStyle={styles.labelText}
                            onPress={() => {this.props.navigation.navigate('Home')}}
                        />

                        <DrawerItem 
                            icon={() => (<Image source={Images.drawer_sl} style={styles.drawerIcon}/>)}
                            label="Speed Limit"
                            labelStyle={styles.labelText}
                            onPress={() => {this.props.navigation.navigate('SpeedLimit')}}
                        />

                        <DrawerItem 
                            icon={() => (<Image source={Images.drawer_hr} style={styles.drawerIcon}/>)}
                            label="History Replay"
                            labelStyle={styles.labelText}
                            onPress={() => {this.props.navigation.navigate('HistoryReplay')}}
                        />
                        <DrawerItem 
                            icon={() => (<Image source={Images.drawer_report} style={styles.drawerIcon}/>)}
                            label="Report"
                            labelStyle={styles.labelText}
                            onPress={() => {this.setState({renderReport:!this.state.renderReport})}}
                        />
                        {this.renderReportView(this.state.renderReport)}
                        <DrawerItem 
                            icon={() => (<Image source={Images.drawer_complaint} style={styles.drawerIcon}/>)}
                            label="Complaint"
                            labelStyle={styles.labelText}
                            onPress={() => {this.props.navigation.navigate('Complaint')}}
                        />
                        <DrawerItem 
                            icon={() => (<Image source={Images.drawer_user} style={styles.drawerIcon}/>)}
                            label="RSA"
                            labelStyle={styles.labelText}
                            onPress={() => {this.props.navigation.navigate('RSA')}}
                        />
                        <DrawerItem 
                            icon={() => (<Image source={Images.drawer_logout} style={styles.drawerIcon}/>)}
                            label="Log Out"
                            labelStyle={styles.labelText}
                            onPress={() => {this.props.navigation.navigate('Login')}}
                        />
                        
                    </View>
                </View>
            </DrawerContentScrollView>

        </View>
    );}
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      padding: height*0.02,
      height:height*0.12,
      flexDirection:'row',
    },
    profileIcon: {
        height: height*0.08,
        width: height*0.08,
    },
    userIcons: {
        height: height*0.03,
        width: height*0.03,
        marginRight:width*0.01,
    },
    userContentBox: {
        flexDirection:'column', 
        width:'70%',
        height:height*0.08, 
        marginLeft:width*0.03,
    },
    userContentBoxText: {
        color:"#00eaf4",
        fontSize:height*0.016,
    },
    userContentBoxBottom:{
        width:'100%',
        height: '45%',
        flexDirection:'row',
        alignItems:'center', 
    },
    userButton: {
        height:'100%',
        width:'50%',
        flexDirection:'row',
        alignItems:'center', 
    },
   
    drawerSection: {
      marginTop: 15,
    },
    labelText: {
        color:"#00eaf4",
        fontSize:height*0.025,
    },
    drawerIcon: {
        height: height*0.04,
        width: height*0.04,
    },
    reportView: {
        marginLeft:width*0.12,
        height: height*0.16,
    }
  });