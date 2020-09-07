import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        position: 'relative',
    },
    wrapper: {
        width,
        height,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    upperBar: {
        width,
        height: height*0.075,
        backgroundColor: '#000000',
        flexDirection:'row',
        alignItems:'center',
    },
    backIconContainer: {
    },
    headingContainer: {
        width:'60%',
        marginLeft:'10%',
        alignItems:'center',
    },
    barText: {
       color:"#ffffff",
       fontSize: height*0.03, 
    },
    barMenuIcon: {
        height:height*0.04,
        width:height*0.04,
        marginLeft:width*0.04,
    },
    barNavIcon: {
        height:height*0.05,
        width:height*0.035,
        marginLeft:width*0.27,
    },
    barRefreshIcon: {
        height:height*0.04,
        width:height*0.04,
        marginLeft:width*0.03,
    },
    searchWrapper: {
        height:height*0.075,
        width:width*0.9,
        alignSelf:"center",
        marginTop:height*0.01,
        backgroundColor: "#dedede",
        flexDirection:'row',
        alignItems:'center',
    },
    searchMenuIcon: {
        height:height*0.04,
        width:height*0.04,
        marginLeft:width*0.03,
    },
    searchTextInput:{
        height:'100%',
        width:'70%',
        marginLeft:width*0.03,
        fontSize:width*0.04,
    },
    callIcon: {
        height:height*0.04,
        width:height*0.04,
        marginLeft:width*0.02,
        position:"absolute",
        right:'5%',
    },
    flatlistWrapper: {
        height:height*0.92,
        marginTop:height*0.01,
        width,
    },
    card: {
        width:'95%',
        height:'80%',
        alignSelf:'center',
        borderRadius:width*0.01,
        padding:width*0.03,
        alignItems:'center',
        flexDirection:'row',
    },
    cardHeader: {
        width:'100%',
        height:'18%',
        flexDirection:'row',
        alignItems:"center",
    },
    cardImages: {
        width:'100%',
        height:'65%',
        flexDirection:'row',
    },
    cardImagesWrapper: {
        width:'25%',
        height:'100%',
        flexDirection:'column',
        alignItems:"center",
    },
    cardAddress: {
        borderTopWidth:1,
        width:'100%',
        height:'20%',
    },
    nameWrapper:{
        width:'30%',
        height:'100%',
    },
    slWrapper:{
        width:'45%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    dateWrapper:{
        width:'25%',
        height:'100%',
        justifyContent:'flex-start',
    },
    name: {
        fontSize:width*0.04,
        fontWeight:'bold',
    },
    speed_limit: {
        fontSize:width*0.035,
        fontWeight:'bold',
    },
    date: {
        fontSize:width*0.025,
        fontWeight:'bold',
        alignSelf:'flex-end'
    },
    address: {
        fontSize:width*0.025,
        fontWeight:'bold',
    },
    cardImagesText:{
        fontSize:width*0.025,
    },
    cardCircle: {
        width:width*0.12,
        height:width*0.12,
        backgroundColor: '#e6e6e6',
        borderRadius:width*0.06,
        alignItems:'center',
        justifyContent:'center',
    },
    cardStatusCircleGreen: {
        width:width*0.12,
        height:width*0.12,
        backgroundColor: '#009015',
        borderRadius:width*0.06,
        alignItems:'center',
        justifyContent:'center',
    },
    cardStatusCircleBlue: {
        width:width*0.12,
        height:width*0.12,
        backgroundColor: '#4d4dff',
        borderRadius:width*0.06,
        alignItems:'center',
        justifyContent:'center',
    },
    circleIcons: {
        width:width*0.10,
        height:width*0.10,
    },
    cardWrapper: {
        height: height*0.09,
        alignItems:"center",
        justifyContent:"center",
    }

     
});
