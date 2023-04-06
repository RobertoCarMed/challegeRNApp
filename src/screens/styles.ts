import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const HomeStyles = StyleSheet.create({
  mainContainer: { 
    flex:1, 
    marginHorizontal:20, 
    alignItems:'center'
  },
  titlesContainer: {
    width:'100%', 
    flex:2
  },
  title: { 
    fontWeight:'800', 
    fontSize:20, 
    textAlign:'left', 
    width:'100%'
  },
  subTitle: { 
    fontWeight:'600', 
    fontSize:16, 
    textAlign:'left', 
    width:'100%'
  },
  cardPtsContainer: {
    width:'100%', 
    alignItems:'center', 
    flex:5, 
    marginBottom:20
  },
  cardPtsTitle: { 
    fontWeight:'800', 
    fontSize:14, 
    color:'#9B9898', 
    textAlign:'left', 
    width:'100%', 
    marginBottom:20 
  },
  containerPts: { 
    backgroundColor:'#334FFA', 
    width:286, 
    height:143, 
    borderRadius:20, 
    justifyContent:'center', 
    alignItems:'center'
  },
  currentMount: {
    color:'white', 
    fontSize:16, 
    fontWeight:'800', 
    width:'85%', 
    top:-10
  },
  titlePoints: {
    color:'white', 
    fontSize:32, 
    fontWeight:'800', 
    textAlign:'center'
  },
  containerList: {
    backgroundColor:'white', 
    width:'100%', 
    borderRadius:15, 
    paddingTop:15, 
    paddingHorizontal:10
  },
  containerButtoms: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'100%', 
    flex:3, 
    alignItems:'flex-end'
  },
  containerShortButtoms: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'100%', 
    flex:3, 
    alignItems:'flex-end'
  },

})

export const DetailsStyles = StyleSheet.create({
  mainContainer: { 
    flex:1, 
    marginHorizontal:20, 
    alignItems:'center'
  },
  titleContainer: {
    backgroundColor:'#CFD6FF', 
    flex:2, 
    width:windowWidth, 
    marginBottom:20, 
    paddingHorizontal:19, 
    paddingVertical:15, 
    justifyContent:'flex-end'
  },
  title: {
    fontWeight:'800', 
    fontSize:24
  },
  imageContainer: {
    flex:7, 
    width:'100%', 
    marginHorizontal:20, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  image: {
    width:353, 
    height:350, 
    borderRadius:15, 
  },
  infotmationContainer: {
    flex:2, 
    width:'100%', 
    justifyContent:'space-around', 
    top:-20
  },
  subTitleInformation: {
    fontWeight:'800', 
    fontSize:14, 
    color:'#9B9898'
  },
  buttomContainer: {
    flex:2, 
    width:'100%', 
    alignItems:'center', 
    justifyContent:'center', 
  },
})