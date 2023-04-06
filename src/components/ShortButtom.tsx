import { Text, TouchableOpacity } from "react-native"
import { shortButtomStyles } from "./styles"


interface Props {
  isEnableAccept: boolean,
  text: string,
  action: () => void,
  setIsEnableAccept: (value: React.SetStateAction<boolean>) => void
}

export const ShortButtom = ({text, action, setIsEnableAccept,isEnableAccept}: Props) => {
  return (
    <TouchableOpacity 
      style={shortButtomStyles.mainContainer}
      onPress={()=>{
        action()
        setIsEnableAccept(!isEnableAccept)
      }}  
    >
      <Text style={shortButtomStyles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
