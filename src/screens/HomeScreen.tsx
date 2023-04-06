import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'

import { CardResumenProduct } from '../components/CardResumenProduct'
import { ShortButtom } from '../components/ShortButtom'
import { LargButtom } from '../components/LargButtom'

import { useDataFormater } from '../hooks/useDataFormater'
import { useGetPoints } from '../hooks/useGetPoints'
import { useGetData } from '../hooks/useGetData'
import { HomeStyles } from './styles'

export const HomeScreen = () => {

  const {
    respaldo,
    data, 
    orderProductByNegativePoints, 
    orderProductByPositivePoints, 
    resetOrder
  } = useGetData()
  const {currentMount} = useDataFormater()
  const {getSumOfPoints} = useGetPoints()
  const [isEnableAccept, setIsEnableAccept] = useState(false)

  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={HomeStyles.mainContainer}>

        {/* Titulo */}
        <View style={HomeStyles.titlesContainer}>
          <Text style={HomeStyles.title}>Bienvenido de vuelta!</Text>
          <Text style={HomeStyles.subTitle}>Rube Rodriguez</Text>
        </View>
        
        {/* Seccion tus puntos */}
        <View style={HomeStyles.cardPtsContainer}>
          <Text style={HomeStyles.cardPtsTitle}>TUS PUNTOS</Text>
          <View style={HomeStyles.containerPts}>
            <Text style={HomeStyles.currentMount}>{currentMount}</Text>
            <Text style={HomeStyles.titlePoints}>{getSumOfPoints(respaldo)} pts</Text>
          </View>
        </View>

        {/* Lista de productos */}
        <View style={{width:'100%', flex:10,}}>
          <Text style={{ ...HomeStyles.cardPtsTitle, marginBottom:10 }}>TUS MOVIMIENTOS</Text>
          <View style={HomeStyles.containerList}>
            <FlatList
              data={data}
              renderItem={({item}) => <CardResumenProduct item={item}/>}
              keyExtractor={ (item) =>  item.id}
            />
          </View>
        </View>

        {/* Botones */}
        <View style={HomeStyles.containerButtoms}>
          { !isEnableAccept &&
          
          <View style={HomeStyles.containerShortButtoms}>
            <ShortButtom 
              action={orderProductByPositivePoints} 
              isEnableAccept={isEnableAccept} 
              text='Ganados' 
              setIsEnableAccept={setIsEnableAccept}
            />
            
            <ShortButtom 
              action={orderProductByNegativePoints} 
              isEnableAccept={isEnableAccept} 
              text='Canjeados' 
              setIsEnableAccept={setIsEnableAccept}
            />
          </View>
            
          }
          { isEnableAccept &&
            <LargButtom 
              action={resetOrder} 
              isEnableAccept={isEnableAccept} 
              setIsEnableAccept={setIsEnableAccept} 
              text='Aceptar'
            />
          }
        </View>
      </View>
    </SafeAreaView>
  )
}
