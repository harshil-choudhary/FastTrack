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
} from "react-native";
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';

import styles from './style';
import { Images } from '../../utils';

const companies = [
  {
    id:1,
    name:"Volkswagen",
    number:"",
  },
  {
    id:2,
    name:"Maruti Suzuki",
    number:"",
  },
  {
    id:3,
    name:"Mahindra",
    number:"",
  },
  {
    id:4,
    name:"Nissan",
    number:"",
  },
  {
    id:5,
    name:"Hyundai",
    number:"",
  },
  {
    id:6,
    name:"Kittu",
    number:"",
  },
  {
    id:7,
    name:"BMW",
    number:"",
  },
  {
    id:8,
    name:"Volkswagen",
    number:"",
  },
  {
    id:9,
    name:"Maruti Suzuki",
    number:"",
  },
  {
    id:10,
    name:"Mahindra",
    number:"",
  },
  {
    id:11,
    name:"Nissan",
    number:"",
  },
  {
    id:12,
    name:"Hyundai",
    number:"",
  },
  {
    id:13,
    name:"Kittu",
    number:"",
  },
  {
    id:14,
    name:"BMW",
    number:"",
  },
]

export default class RSA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
              <Text style={styles.barText}>Road Side Assistance</Text>
            </View>
          </View>

          <View style={styles.flatlistWrapper}>
            <FlatList
              showsVerticalScrollIndicator={false} 
              keyExtractor={(item, index) => index.toString()} 
              data={companies}
              renderItem={({item}) =>
                <TouchableOpacity style={styles.cardWrapper}>
                  <Card style={styles.card}>
                    <Text>{item.name}</Text>
                    <Image source={Images.call} style={styles.callIcon}/>
                  </Card>
                </TouchableOpacity>
            }/>
          </View>

       
        </View>
      </View>
    );
  }
}
