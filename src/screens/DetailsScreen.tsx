import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { StackParams } from '../navigation/StackAplication';
import { useDataFormater } from '../hooks/useDataFormater';
import { LargButtom } from '../components/LargButtom';
import { DetailsStyles } from './styles';

interface Props extends StackScreenProps<StackParams, 'Details'>{}

export const DetailsScreen = ({navigation, route}: Props) => {

  const {params: {item}} = route

  const {dataFormated, detailsFormat} = useDataFormater()  

  useEffect(() => {
    detailsFormat(item.createdAt)
  }, [])
  

  return (
    <View style={DetailsStyles.mainContainer}>
      <View style={DetailsStyles.titleContainer}>
        <Text style={DetailsStyles.title}>{item.product}</Text>
      </View>

      <View style={DetailsStyles.imageContainer}>
        <Image
          source={{uri: item.image}}
          style={DetailsStyles.image}
        />
      </View>

      <View style={DetailsStyles.infotmationContainer}>
        <Text style={DetailsStyles.subTitleInformation}>Detalles del producto:</Text>
        <Text>Comprado el {dataFormated}</Text>
        <Text style={DetailsStyles.subTitleInformation}>Con esta compra acumulaste</Text>
      </View>

      <View style={{flex:1, width:'100%', }}>
        <Text style={{fontWeight:'800', fontSize:24,}}>{item.points} puntos</Text>
      </View>

      <View style={DetailsStyles.buttomContainer}>
        <LargButtom action={() => navigation.pop()} text='Aceptar'/>
      </View>
    </View>
  )
}
