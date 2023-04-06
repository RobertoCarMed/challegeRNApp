import { Text, TouchableOpacity } from "react-native"
import { largeButtomStyles } from "./styles"

interface Props {
  text: string,
  action: () => void,
  setIsEnableAccept?: (value: React.SetStateAction<boolean>) => void,
  isEnableAccept?: boolean 
}

export const LargButtom = ({text, isEnableAccept, action, setIsEnableAccept}: Props) => {
  

  return (
    <TouchableOpacity 
      style={largeButtomStyles.mainContainer}
      onPress={()=>{
        action()
        if(setIsEnableAccept) setIsEnableAccept(!isEnableAccept)
      }} 
    >
      <Text style={largeButtomStyles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
