import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants";
let {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
      },
      fadingContainer: {
        padding: 20,
        backgroundColor: colors.red,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
      },
      fadingText: {
        fontSize: 28,
        color:colors.white
      },
      buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
      },
      backgroundImage:{
          height:height,
          width:width
      },
      innerContainer:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        },
        clickMeButton:{
            paddingHorizontal:20,
            paddingVertical:10,
            backgroundColor:colors.steelBlue,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center'
        },
        clickeMeText:{
            color:colors.white,
            fontSize:18,
            alignItems:'center',
            justifyContent:'center'}
    

})
export default styles