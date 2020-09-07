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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount(){
    this.setState({
      data: vehicles,
      loading: false,
      viewAnimation:true,
    });
    this.arrayholder = vehicles;
  }


  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          
          <View style={styles.upperBar}>
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer();}}>
              <Image source={Images.navigation_Menu} style={styles.barMenuIcon}/>
            </TouchableOpacity>
            <Text style={styles.barText}>Vehicle List</Text>
            <Image source={Images.marker_navigation_blue} style={styles.barNavIcon}/>
            <Image source={Images.refresh_blue} style={styles.barRefreshIcon}/>
          </View>

          <View style={styles.searchWrapper}>
            <Image source={Images.searchMenu_icon} style={styles.searchMenuIcon}/>
            {/* <TextInput style={styles.searchTextInput} 
              placeholderTextColor="#6f7a8c"
             
              onChangeText={text => this.searchFilterFunction(text)}  
              placeholder="Search Vehicle..."/> */}
              <TextInput style={styles.textInputStyle}
                            placeholder="Search Vehicle..."
                            placeholderTextColor='#6f7a8c'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                            value={this.state.name}
                            onChangeText={text => this.searchFilterFunction(text)}
                        />
             <Image source={Images.search_grey} style={styles.searchIcon}/>
          </View>

          <View style={styles.flatlistWrapper}>
          <FlatList
             showsVerticalScrollIndicator={false} 
            keyExtractor={(item, index) => index.toString()} 
            data={this.state.data}
            renderItem={({item}) => 
              <Card style={styles.card}>

                <View style={styles.cardHeader}>
                  <View style={styles.nameWrapper}>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                  <View style={styles.slWrapper}>
                    <Text style={styles.speed_limit}>Speed Limit: {item.speed_limit}(KM/H)</Text>
                  </View>
                  <View style={styles.dateWrapper}>
                    <Text style={styles.date}>{item.date}</Text>
                  </View>
                </View>

                <View style={styles.cardImages}>
                  <View style={styles.cardImagesWrapper}>
                    <Card style={item.status=="Running"?styles.cardStatusCircleGreen:styles.cardStatusCircleBlue}>
                      <Image source={Images.bike_white} style={styles.circleIcons}/>
                    </Card>
                    <Text style={styles.cardImagesText}>Status</Text>
                    <Text style={styles.cardImagesText}>{item.status}</Text>
                  </View>
                  <View style={styles.cardImagesWrapper}>
                    <Card style={styles.cardCircle}>
                      <Image source={Images.speed} style={styles.circleIcons}/>
                    </Card>
                    <Text style={styles.cardImagesText}>Engine</Text>
                    <Text style={styles.cardImagesText}>{item.engine}</Text>
                  </View>
                  <View style={styles.cardImagesWrapper}>
                    <Card style={styles.cardCircle}>
                      <Image source={Images.engine_b} style={styles.circleIcons}/>
                    </Card>
                    <Text style={styles.cardImagesText}>Speed(KM/H)</Text>
                    <Text style={styles.cardImagesText}>{item.speed}</Text>
                  </View>
                  <View style={styles.cardImagesWrapper}>
                    <Card style={styles.cardCircle}>
                      <Image source={Images.marker_navigation_red} style={styles.circleIcons}/>
                    </Card>
                    <Text style={styles.cardImagesText}>Track</Text>
                    <Text style={styles.cardImagesText}></Text>
                  </View>
                </View>

                <View style={styles.cardAddress}>
                  <Text style={styles.address}>{item.address}</Text>
                </View>

              </Card>
            }/>
          </View>
        </View>
      </View>
    );
  }
}
