import { useEffect, useState } from "react"
import { DataResponse } from "../interfaces/ProductsInterface"

export const useGetData = () => {

  const [data, setData] = useState<DataResponse[]>([])
  const [respaldo, setRespaldo] = useState<DataResponse[]>([])

  const getData = async () => {
    fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products', { method:'GET' })
      .then(res => res.json())
      .then(res => {
        setData(res)
        setRespaldo(res)
      })
  }

  const orderProductByNegativePoints = () => {
    let orderData: DataResponse[] = [] 
    orderData = data.filter(currentItem => currentItem.is_redemption)
    setData(orderData)
  }

  const orderProductByPositivePoints = () => {
    let orderData: DataResponse[] = [] 
    orderData = data.filter(currentItem => !currentItem.is_redemption)
    setData(orderData)
  }

  const resetOrder = () => {
    setData(respaldo)
  }

  useEffect(() => {
    getData()
  }, [])
  

  return {
    respaldo,
    data,
    orderProductByNegativePoints,
    orderProductByPositivePoints,
    resetOrder
  }
}
