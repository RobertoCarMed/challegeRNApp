import { useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { DataResponse } from "../interfaces/ProductsInterface"
import { useDataFormater } from "../hooks/useDataFormater"
import { useEffect } from "react"
import { cardResumenStyles } from "./styles"

interface Props {
  item: DataResponse
}

export const CardResumenProduct = ({item}: Props) => {

  const navigation = useNavigation()

  const {dataFormated, resumenFormat} = useDataFormater()  

  

  useEffect(() => {
    resumenFormat(item.createdAt)
  }, [])
  

  return (
    <TouchableOpacity 
      style={cardResumenStyles.mainContainer}
      onPress={() => navigation.navigate('Details', {item})}  
    >
      <View style={{flex:4}}>
        <Image
        source={{uri: item.image}}
        style={cardResumenStyles.image}
        />
      </View>

      <View style={cardResumenStyles.informationContainer}>
        <Text style={cardResumenStyles.titleInformation}>{item.product}</Text>
        <Text style={cardResumenStyles.dateInformation}>{dataFormated}</Text>
      </View>

      <View style={cardResumenStyles.pointsContainer}>
        <Text style={{...cardResumenStyles.pointsText, color:item.is_redemption ? "red" : "green"}}>{item.is_redemption ? "-" : "+"}</Text>
        <Text style={cardResumenStyles.pointsText}>{item.points}</Text>

      </View>

      {/* Aqui debe ir un icono */}
      <Text style={cardResumenStyles.arrow}>{">"}</Text> 
    </TouchableOpacity>
  )
}
