import { useEffect, useState } from "react"

export const useDataFormater = () => {
  const [dataFormated, setDataFormated] = useState<string>('')
  const [currentMount, setCurrentMount] = useState<string>('')
  
  const mounts = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]
  const resumenFormat = (dateString: string) => {

    const date = new Date(dateString)  
    const day   = date.getDay()
    const mount = date.getMonth()
    const year  = date.getFullYear()

    setDataFormated(`${day} de ${mounts[mount]} de ${year}`)
  }
  
  const detailsFormat = (dateString: string) => {

    const date = new Date(dateString)  
    const day   = date.getDay()
    const mount = date.getMonth()
    const year  = date.getFullYear()

    setDataFormated(`${day} de ${mounts[mount]}, ${year}`)
  }

  const getCurrentMount = () => {
    const date = new Date()  
    const mount = date.getMonth()

    setCurrentMount(mounts[mount])
  }

  useEffect(() => {
    getCurrentMount()
  }, [])
  

  return {
    dataFormated,
    currentMount,
    resumenFormat,
    detailsFormat
  }
}


