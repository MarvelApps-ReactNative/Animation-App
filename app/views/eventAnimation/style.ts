import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants";

let {height,width}= Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    box: {
        backgroundColor: colors.red,
        width: 100,
        height: 100,
        borderRadius: 4,
      },
      backgroundImage:{
        height:height,
        width:width,
    },
    innerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default styles;