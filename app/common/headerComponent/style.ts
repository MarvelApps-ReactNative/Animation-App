import { StyleSheet } from "react-native";
import { colors } from "../../constants";
const styles  = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    leftRightContainer:
    {
        height:40,
        width:40
    },
    headText:{
        color:colors.white,
        fontSize:24,
        textAlign:'center'
    },
    backIcon:{
        height:40,
        width:40,
        tintColor:colors.white
    }

})

export default styles;