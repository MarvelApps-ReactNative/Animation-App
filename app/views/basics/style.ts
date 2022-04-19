import { StyleSheet,Dimensions } from "react-native";
import { colors } from "../../constants";


let {height,width} = Dimensions.get('window');
 

const styles  = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    backgroundImage:{
        height:height,
        width:width,
    },
    innerContainer:{
        flex:1
    },
    animatableView:{
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.red,
        borderRadius:4,
    },
    labelText:{
        color: colors.white,
        fontSize:14,
        textAlign:'center',
        fontWeight:'600'
    }
})

export default styles;