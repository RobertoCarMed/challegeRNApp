import { StyleSheet } from "react-native";

export const cardResumenStyles = StyleSheet.create({
  mainContainer: {
    flexDirection:'row', 
    alignItems:'center', 
    marginBottom:15
  },
  image: {
    width:55, 
    height:55, 
    borderRadius:10, 
    marginRight:10
  },
  informationContainer: { 
    height:55, 
    justifyContent:'space-around', 
    flex:11
  },
  titleInformation: {
    fontWeight:'800', 
    fontSize:14,
  },
  dateInformation: {
    fontWeight:'400', 
    fontSize:12,
  },
  pointsContainer: {
    flex:4,
    flexDirection:'row'
  },
  pointsText: { 
    fontWeight:'800', 
    fontSize:16
  },
  arrow: {
    flex:1, 
    fontWeight:'800', 
    fontSize:16
  }
})

export const largeButtomStyles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'#334FFA', 
    width:'100%', 
    height:50, 
    borderRadius:10, 
    justifyContent:'center', 
    alignItems:'center'
  },
  text: {
    fontWeight:'800', 
    color:'white', 
    fontSize:14
  }
})
export const shortButtomStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor:'#334FFA', 
    width:170, 
    height:50, 
    borderRadius:10, 
    justifyContent:'center', 
    alignItems:'center'
  },
  text: {
    fontWeight:'800', 
    color:'white', 
    fontSize:14
  }
})