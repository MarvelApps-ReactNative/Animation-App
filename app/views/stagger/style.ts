import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants";

let {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding:10,
       
      },
      fadingContainer: {
        padding: 20,
        alignItems:'center',
        justifyContent:'center',
        
        backgroundColor: colors.red,
        borderRadius:4,
      },
      fadingText: {
        color:colors.white,
        fontSize: 28
      },
      buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
      },
      containerImage:{
          height:height,
          width:width
      },
      innerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      clickMeButton:{
          padding:10,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:colors.steelBlue,
          borderRadius:20,
        },
        clickMeButtonText:{
            fontSize:18,
            color:colors.white
        }

})

export default styles;
