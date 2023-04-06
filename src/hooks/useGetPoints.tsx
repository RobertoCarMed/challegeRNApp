import { useEffect, useState } from "react"
import { DataResponse } from "../interfaces/ProductsInterface"
import format from 'format-number'


export const useGetPoints = () => {


  const getSumOfPoints = (itemsArray: DataResponse[]) => {
    let sumOfPoints: number = 0
    
    itemsArray.forEach( currentItem => {
      if(currentItem.is_redemption){
        sumOfPoints -= currentItem.points
      } else{
        sumOfPoints += currentItem.points
      }
    })
    
    return format({})(sumOfPoints)
  }

  return {
    getSumOfPoints
  }
}
