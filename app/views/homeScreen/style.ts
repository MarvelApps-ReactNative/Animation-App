import {StyleSheet,Dimensions} from "react-native";
import {colors} from '../../constants'
let {height,width} =Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
         flex:1,
        padding:10,
    },
    renderContainer:{
       
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderTopWidth:1,
        borderColor:colors.grey,
        borderBottomWidth:1,
    },
    renderText:{
        fontSize:18,
        color:colors.white,
        fontWeight:'700'
    },
    headText:{
        fontSize:24,
        color:colors.white,
        paddingVertical:10,
    },
    backgroundImage:{
        height:height,
        width:width
    },
    rainContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    rainingEffect1:{
        height:15,
        width:3,
        backgroundColor:colors.lightGreen,
        borderRadius:90,
    },
    rainingEffect2:{
        height:15,
        width:3,
        backgroundColor:colors.lightGreen,
        borderRadius:90,
    },
    rainingEffect3:{
        height:15,
        width:3,
        backgroundColor:colors.lightGreen,
        borderRadius:90,
    },
    rainingEffect4:{
        height:30,
        width:2,
        backgroundColor:colors.lightGreen,
        borderRadius:90
    },
    rainingEffect5:{
        height:10,
        width:3,
        backgroundColor:colors.lightGreen,
        borderRadius:90
    },
    rainingEffect6:{
        height:10,width:3,backgroundColor:colors.lightBlue,borderRadius:90,
    },
    rainingEffect7:{
        height:10,
        width:3,
        backgroundColor:colors.lightPink,
        sborderRadius:90,
    },
    rainingEffect8:{
        height:15,
        width:4,
        backgroundColor:colors.lightGreen,
        borderRadius:90,
    },
    rainingEffect9:{
        height:15,
        width:4,
        backgroundColor:colors.lightGreen,
        borderRadius:90,
    },
    rainingEffect10:{
        height:10,
        width:6,
        backgroundColor:colors.lightGreen,
        borderRadius:90,
    }
    

})

export default styles